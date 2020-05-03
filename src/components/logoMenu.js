import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import Image from "gatsby-image"

const LogoMenu = () => {
  const data = useStaticQuery(graphql`
    query BioQuery {
      avatar: file(absolutePath: { regex: "/logo.jpg/" }) {
        childImageSharp {
          fixed(width: 300, height: 300) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)

  const textStyles = {
    border: `1px solid black`
  }

  const activeTextStyles = {
    border: `16px dashed white`
  }

  return (
    <div>
      <Link to="/">
        <Image fixed={data.avatar.childImageSharp.fixed} />
      </Link>
      <Link
        to="/artists"
        className="logoMenuItem"
        style={textStyles}
        activeStyle={activeTextStyles}
      >
        Artists
      </Link>
      <Link to="/" className="logoMenuItem">
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
  )
}

export default LogoMenu
