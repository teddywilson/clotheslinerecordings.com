import React from "react"

const ReleasesList = ({ children }) => {
  return (
    <div>
        TODO: implement
    </div>
  )
}

export default ReleasesList

export const pageQuery = graphql`
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
`
