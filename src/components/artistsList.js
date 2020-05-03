import React from "react"

import { useStaticQuery, graphql } from "gatsby"
import DisplayCell from "./displayCell"
import DisplayGridList from "./displayGridList"
import GridListTile from "@material-ui/core/GridListTile"

const ArtistsList = ({ children }) => {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark(filter: { fileAbsolutePath: { regex: "/artists/" } }) {
        edges {
          node {
            excerpt
            fields {
              slug
            }
            frontmatter {
              bandcampUrl
              image
              name
            }
          }
        }
      }
    }
  `)

  const artists = data.allMarkdownRemark.edges

  return (
    <DisplayGridList>
      {artists.map((item, index) => (
        <GridListTile key={index}>
          <DisplayCell
            key={index}
            item={item}
            image={item.node.frontmatter.image}
            title={item.node.frontmatter.name}
            onClickListener={() => {
              window.open(item.node.frontmatter.bandcampUrl, "_blank")
            }}
          />
        </GridListTile>
      ))}
    </DisplayGridList>
  )
}

export default ArtistsList
