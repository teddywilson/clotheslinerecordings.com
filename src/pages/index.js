import React from "react"

import { useStaticQuery, graphql, navigate} from "gatsby"
import { Helmet } from "react-helmet"
import { isBrowser } from 'react-device-detect';

import Layout from "../components/layout"

const Index = () => {
  // Don't show this page on desktop
  if (isBrowser) {
    navigate('/artists')
    return null
  }
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
