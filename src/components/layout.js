import React from "react"

import LogoMenu from "./logoMenu"

const Layout = ({ children }) => {
  return (
    <div style={{paddingLeft: 96, paddingTop: 16, paddingRight: 96}}>
      <LogoMenu />
      <main
      >{children}</main>
    </div>
  )
}

export default Layout
