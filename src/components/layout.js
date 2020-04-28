import React from "react"

const Layout = ({ location, title, children }) => {
  return (
    <div>
      <main>{children}</main>
      <footer/>
    </div>
  )
}

export default Layout
