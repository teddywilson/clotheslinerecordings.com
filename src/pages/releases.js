import React from "react"

import { graphql } from "gatsby"

import DisplayCell from "../components/displayCell"
import DisplayGridList from "../components/displayGridList"
import Layout from "../components/layout"
import LogoMenu from "../components/logoMenu"

import GridListTile from "@material-ui/core/GridListTile"

const Releases = ({ data, location }) => {
  // TODO(teddywilson) This sort should not be necessary but Gatsby sort is broken
  // https://github.com/gatsbyjs/gatsby/issues/28047
  const releases = data.allMarkdownRemark.nodes
    .sort((releaseA, releaseB) => {
      return (
        new Date(releaseA.frontmatter.date).getTime() -
        new Date(releaseB.frontmatter.date).getTime()
      )
    })
    .reverse()
  return (
    <Layout>
      <LogoMenu location={location} />
      <DisplayGridList>
        {releases.map((item, index) => {
          const release = item.frontmatter
          const subtitle = `${release.artist}, ${release.catalogue}`
          return (
            <GridListTile key={index}>
              <DisplayCell
                key={index}
                item={item}
                image={release.image}
                title={release.title}
                subtitle={subtitle}
                onClickListener={() => {
                  window.open(release.bandcampUrl, "_blank")
                }}
              />
            </GridListTile>
          )
        })}
      </DisplayGridList>
    </Layout>
  )
}

export default Releases

// TODO(teddywilson) See todo above; add sort to GraphQL query once bug is fixed
export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(filter: { fileAbsolutePath: { regex: "/releases/" } }) {
      nodes {
        excerpt
        fields {
          slug
        }
        frontmatter {
          date
          artist
          bandcampUrl
          catalogue
          image
          title
        }
      }
    }
  }
`
