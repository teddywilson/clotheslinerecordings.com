import React from "react"

import { Helmet } from "react-helmet"

import Layout from "../components/layout"
import LogoMenu from "../components/logoMenu"

const Index = () => {
  return (
    <Layout>
      <Helmet>
        <meta charSet="utf-8" />
        <title>CLOTHESLINE | home</title>
        <link rel="canonical" href="http://clotheslinerecordings.com" />
      </Helmet>
      <LogoMenu />
    </Layout>
  )
}

export default Index
