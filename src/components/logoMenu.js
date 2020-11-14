import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import Image from "gatsby-image"

const LogoMenu = () => {
  const data = useStaticQuery(graphql`
    query BioQuery {
      avatar: file(absolutePath: { regex: "/logo.jpeg/" }) {
        childImageSharp {
          fixed(width: 162, height: 162) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)

  const textStyles = {
    borderBottom: `8px solid black`,
  }

  const activeTextStylesDashedBorder = {
    borderBottom: `8px dashed white`,
  }

  const activeTextStylesSolidBorder = {
    borderBottom: `8px solid white`,
  }

  return (
    <div>
      <Link to="/">
        <Image
          fixed={data.avatar.childImageSharp.fixed}
          style={{
            margin: 0,
            marginTop: 16,
            marginLeft: 48,
            padding: 0,
          }}
        />
      </Link>
      <div className="logoMenuNavigationContainer">
        <Link
          to="/artists/"
          className="logoMenuItem"
          style={textStyles}
          activeStyle={activeTextStylesDashedBorder}
        >
          Artists
        </Link>
        <Link to="/" className="logoMenuSlashNavigationMenuItem">
          /
        </Link>
        <Link
          to="/releases/"
          className="logoMenuItem"
          style={textStyles}
          activeStyle={activeTextStylesSolidBorder}
        >
          Releases
        </Link>
      </div>
    </div>
  )
}

export default LogoMenu
