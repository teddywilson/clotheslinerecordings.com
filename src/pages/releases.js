import React from "react"

import { graphql } from "gatsby"

import DisplayCell from "../components/displayCell"
import DisplayGridList from "../components/displayGridList"
import Layout from "../components/layout"

import GridListTile from "@material-ui/core/GridListTile"

// TODO(teddywilson) See TODOs in ./artists.js, as they are congruent with this file
const Releases = ({ data }) => {
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
      <DisplayGridList>
        {releases.map((item, index) => {
          const release = item.frontmatter
          const subtitle = `${release.artist}, ${release.catalogue}`
          return (
            <GridListTile key={index}>
              <DisplayCell
                item={item}
                key={index}
                imageFluid={release.image.childImageSharp.fluid}
                title={release.title}
                subtitle={subtitle}
                url={release.bandcampUrl}
              />
            </GridListTile>
          )
        })}
      </DisplayGridList>
    </Layout>
  )
}

export default Releases

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
          title
          image {
            childImageSharp {
              fluid(maxWidth: 500) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  }
`
