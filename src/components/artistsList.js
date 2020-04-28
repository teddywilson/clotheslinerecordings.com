import React from "react"

import { useStaticQuery, graphql } from "gatsby"
import DisplayCell from "./displayCell"

const ArtistsList = ({ children }) => {

  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark(filter: {fileAbsolutePath: {regex: "/artists/"}}) {
        edges {
          node {
            excerpt
            fields {
              slug
            }
            frontmatter {
              name
            }
          }
        }
      }
    }
  `);

  const artists = data.allMarkdownRemark.edges

  return (
    <div>
      {artists.map((item, index) => (
        <DisplayCell
          key={index}
          item={item}
          title={item.node.frontmatter.name}/>
      ))}
    </div>
  )
}

export default ArtistsList