import React from "react"

import { graphql } from "gatsby"

import DisplayCell from "../components/displayCell"
import DisplayGridList from "../components/displayGridList"
import Layout from "../components/layout"
import LogoMenu from "../components/logoMenu"

import GridListTile from "@material-ui/core/GridListTile"

const ReleasesTemplate = ({ data, location }) => {
  const releases = data.allMarkdownRemark.nodes
  return (
    <Layout>
      <LogoMenu location={location} />
      <DisplayGridList>
        {releases.map((item, index) => {
          const release = item.frontmatter
          const subtitle = release.artist + ", " + release.catalogue
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

export default ReleasesTemplate

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/releases/" } }
      sort: { fields: [frontmatter___date], order: [DESC] }
    ) {
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
          index
        }
      }
    }
  }
`
