import React from "react"

import { Helmet } from "react-helmet"

import Layout from "../components/layout"
import DisplayCell from "../components/displayCell"
import DisplayGridList from "../components/displayGridList"
import LogoMenu from "../components/logoMenu"

import GridListTile from "@material-ui/core/GridListTile"

const Index = ({ location }) => {
  // TODO: move this to markdown file
  const imageName = "ocsc.jpg"
  const description =
    "Clothesline Recordings was founded by Austin Morel, Kabir Kumar-Hardy, and Teddy Wilson in 2018 and is currently based in Brooklyn, NY."
  return (
    <Layout>
      <Helmet>
        <meta charSet="utf-8" />
        <title>CLOTHESLINE | home</title>
        <link rel="canonical" href="http://clotheslinerecordings.com" />
      </Helmet>
      <LogoMenu location={location} />
      <DisplayGridList>
        <GridListTile>
          <DisplayCell image={imageName} subtitle={description} />
        </GridListTile>
      </DisplayGridList>
    </Layout>
  )
}

export default Index
