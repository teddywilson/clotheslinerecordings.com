import React from "react"

import Layout from "../components/layout"
import LogoMenu from "../components/logoMenu"
import ArtistsList from "../components/artistsList"

const Artists = () => {

  return (
    <Layout>
        <LogoMenu/>
        {/* <div style={{display: 'flex', justifyContent: 'center'}}>
          <ArtistsList/>
        </div> */}
    </Layout>
  )
}

export default Artists