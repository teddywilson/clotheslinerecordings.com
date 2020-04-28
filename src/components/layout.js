import React from "react"

const Layout = ({ location, title, children }) => {
  return (
    <div
      style={{
        position: 'absolute',
        top: '20%',
        transform: 'translate(0, -50%)'
      }}
    >
      <main>{children}</main>
      <footer>
      </footer>
    </div>
  )
}

export default Layout
