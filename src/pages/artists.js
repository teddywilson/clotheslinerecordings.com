import React from "react"

import { graphql } from "gatsby"

import DisplayCell from "../components/displayCell"
import DisplayGridList from "../components/displayGridList"
import Layout from "../components/layout"

import GridListTile from "@material-ui/core/GridListTile"

const Artists = ({ data }) => {
  const artists = data.allMarkdownRemark.nodes
  return (
    <Layout>
      <DisplayGridList>
        {artists.map((item, index) => {
          const artist = item.frontmatter
          return (
            <GridListTile key={index}>
              <DisplayCell
                item={item}
                key={index}
                imageFluid={artist.image.childImageSharp.fluid}
                title={artist.name}
                url={artist.artistUrl}
              />
            </GridListTile>
          )
        })}
      </DisplayGridList>
    </Layout>
  )
}

export default Artists

// TODO(teddywilson) Use string interpolation for maxWidth, though it's not currently supported
export const pageQuery = graphql`
  {
    allMarkdownRemark(filter: { 
      fileAbsolutePath: { regex: "/artists/" } }
      sort: { fields: [frontmatter___name, frontmatter___title], order: ASC }
    ) {
      nodes {
        excerpt
        fields {
          slug
        }
        frontmatter {
          artistUrl
          name
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
