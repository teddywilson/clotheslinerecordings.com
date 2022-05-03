import React from "react"

import Footer from "./footer"
import LogoMenu from "./logoMenu"

const Layout = ({ children }) => {
  return (
    <div style={{
      marginLeft: 300,
      marginRight: 300
    }}>
      <LogoMenu />
      <main
      >{children}</main>
      {/* <Footer /> */}
    </div>
  )
}

export default Layout
