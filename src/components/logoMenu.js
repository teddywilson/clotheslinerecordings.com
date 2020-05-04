import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import Image from "gatsby-image"

const LogoMenu = () => {
  const data = useStaticQuery(graphql`
    query BioQuery {
      avatar: file(absolutePath: { regex: "/logo.jpg/" }) {
        childImageSharp {
          fixed(width: 270, height: 270) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)

  const textStyles = {
    border: `8px solid black`
  }

  const activeTextStyles = {
    border: `8px dashed white`
  }

  return (
    <div>
      <Image
        fixed={data.avatar.childImageSharp.fixed}
        style={{
          margin: 0,
          padding: 0
        }}
      />
      <div className="logoMenuNavigationContainer">
        <Link
          to="/artists"
          className="logoMenuItem"
          style={textStyles}
          activeStyle={activeTextStyles}
        >
          Artists
        </Link>
        <Link to="/" className="logoMenuSlashNavigationMenuItem">
          /
        </Link>
        <Link
          to="/releases"
          className="logoMenuItem"
          style={textStyles}
          activeStyle={activeTextStyles}
        >
          Releases
        </Link>
      </div>
    </div>
  )
}

export default LogoMenu
