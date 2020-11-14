import React from "react"

import { useStaticQuery, graphql } from "gatsby"
import { Helmet } from "react-helmet"

import Layout from "../components/layout"

const Index = () => {
  const data = useStaticQuery(graphql`
    query {
      markdownRemark(fileAbsolutePath: { regex: "/global/metadata/index/" }) {
        frontmatter {
          description
        }
      }
    }
  `)
  return (
    <Layout>
      <Helmet>
        <meta charSet="utf-8" />
        <title>CLOTHESLINE | home</title>
        <link rel="canonical" href="http://clotheslinerecordings.com" />
      </Helmet>
      <div className="indexBodyText">{data.markdownRemark.frontmatter.description}</div>
    </Layout>
  )
}

export default Index
