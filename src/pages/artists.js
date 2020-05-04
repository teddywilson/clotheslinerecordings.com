import React from "react"

import { Helmet } from "react-helmet"

import Layout from "../components/layout"
import LogoMenu from "../components/logoMenu"
import ArtistsList from "../components/artistsList"

const Artists = () => {
  return (
    <Layout>
      <Helmet>
        <title>CLOTHESLINE | artists</title>
        <link rel="canonical" href="http://clotheslinerecordings.com/artists" />
      </Helmet>
      <LogoMenu />
      <ArtistsList />
    </Layout>
  )
}

export default Artists
