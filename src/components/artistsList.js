import React from "react"

import { useStaticQuery, graphql } from "gatsby"

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
        // TODO style
        <h1 key={index} item={item}>
          {item.node.frontmatter.name}
        </h1>
      ))}
    </div>
  )
}

export default ArtistsList