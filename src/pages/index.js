import React from "react"
import { Link, graphql } from "gatsby"

import SideMenu from "../components/sideMenu"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { rhythm } from "../utils/typography"

const BlogIndex = ({ data, location }) => {
  
  const menuLinks = data.site.siteMetadata.menuLinks;
  const siteTitle = data.site.siteMetadata.title

  const posts = data.allMarkdownRemark.edges

  return (
    <Layout location={location} title={siteTitle} style={{flexDirection: 'row'}}>
      <SEO title="All releases"/>
      <SideMenu/>
      Record label based out of Brooklyn, NYC
      {posts.map(({ node }) => {
        const title = node.frontmatter.title || node.fields.slug
        return (
          <article key={node.fields.slug}>
            <header>
              <h3
                style={{
                  marginBottom: rhythm(1 / 400),
                }}
              >
                <a style={{ boxShadow: `none` }} href={node.frontmatter.bandcampUrl}>
                  {title}
                </a>
              </h3>
              <small>{node.frontmatter.date}</small>
            </header>
            <section>
              {/* <p
                dangerouslySetInnerHTML={{
                  __html: node.frontmatter.description || node.excerpt,
                }} */}
            </section>
          </article>
        )
      })}
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
