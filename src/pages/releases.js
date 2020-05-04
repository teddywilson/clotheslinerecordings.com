import React from "react"

import { Helmet } from "react-helmet"

import Layout from "../components/layout"
import LogoMenu from "../components/logoMenu"
import ReleasesList from "../components/releasesList"

const Releases = () => {
  return (
    <Layout>
      <Helmet>
        <title>CLOTHESLINE | releases</title>
        <link
          rel="canonical"
          href="http://clotheslinerecordings.com/releases"
        />
      </Helmet>
      <LogoMenu />
      <ReleasesList />
    </Layout>
  )
}

export default Releases
