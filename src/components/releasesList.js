import React from "react"

import { useStaticQuery, graphql } from "gatsby"

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
            }
          }
        }
      }
    }
  `);

  const releases = data.allMarkdownRemark.edges

  console.log('releases: ', releases)

  return (
    <div>
      {releases.map((item, index) => (
        // TODO style
        <h1 key={index} item={item}>
          {item.node.frontmatter.bandcampUrl}
        </h1>
      ))}
    </div>
  )
}

export default ReleasesList