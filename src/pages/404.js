import React from "react"

import { useStaticQuery, graphql } from "gatsby"
import { Helmet } from "react-helmet"

import Layout from "../components/layout"
import DisplayCell from "../components/displayCell"
import DisplayGridList from "../components/displayGridList"
import LogoMenu from "../components/logoMenu"

import GridListTile from "@material-ui/core/GridListTile"

const PageNotFound = ({ location }) => {
  const data = useStaticQuery(graphql`
    query {
      markdownRemark(fileAbsolutePath: { regex: "/global/metadata/index/" }) {
        frontmatter {
          pageNotFoundTitle
          pageNotFoundSubtitle
        }
      }
    }
  `)
  return (
    <Layout>
      <Helmet>
        <meta charSet="utf-8" />
        <title>CLOTHESLINE | :(</title>
        <link rel="canonical" href="http://clotheslinerecordings.com" />
      </Helmet>
      <LogoMenu location={location} />
      <DisplayGridList>
        <GridListTile>
          <DisplayCell
            title={data.markdownRemark.frontmatter.pageNotFoundTitle}
            subtitle={data.markdownRemark.frontmatter.pageNotFoundSubtitle}
          />
        </GridListTile>
      </DisplayGridList>
    </Layout>
  )
}

export default PageNotFound
