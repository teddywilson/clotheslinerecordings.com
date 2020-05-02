import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import LogoMenu from "../components/logoMenu"

const Index = ({ data, location }) => {
  return (
    <Layout>
      <LogoMenu/>
    </Layout>
  )
}

export default Index

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
