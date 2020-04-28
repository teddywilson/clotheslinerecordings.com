import React from "react"

import { useStaticQuery, graphql } from "gatsby"
import DisplayCell from "./displayCell"

const ReleasesList = ({ children }) => {

  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark(filter: {fileAbsolutePath: {regex: "/releases/"}}) {
        edges {
          node {
            excerpt
            fields {
              slug
            }
            frontmatter {
              bandcampUrl
              title
            }
          }
        }
      }
    }
  `);

  const releases = data.allMarkdownRemark.edges

  return (
    <div>
      {releases.map((item, index) => (
        <DisplayCell
          key={index}
          item={item}
          title={item.node.frontmatter.title}/>
      ))}
    </div>
  )
}

export default ReleasesList