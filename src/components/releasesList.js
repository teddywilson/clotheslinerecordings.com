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
  
`
