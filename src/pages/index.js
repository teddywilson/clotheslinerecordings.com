import React from "react"
import { graphql } from "gatsby"

import LogoMenu from "../components/logoMenu"
import Layout from "../components/layout"

const BlogIndex = ({ data, location }) => {
  
  // TODO: unused
  const menuLinks = data.site.siteMetadata.menuLinks;
  const siteTitle = data.site.siteMetadata.title
  const posts = data.allMarkdownRemark.edges

  return (
    <Layout>
      <LogoMenu/>
    </Layout>
  )
}

export default BlogIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
        menuLinks {
          name
          link
        }
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            bandcampUrl
          }
        }
      }
    }
  }
`
