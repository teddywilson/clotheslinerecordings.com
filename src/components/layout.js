import React from "react"

import Footer from "./footer"
import LogoMenu from "./logoMenu"

const Layout = ({ children }) => {
  return (
    <div>
      <LogoMenu />
      <main>{children}</main>
      <Footer />
    </div>
  )
}

export default Layout
