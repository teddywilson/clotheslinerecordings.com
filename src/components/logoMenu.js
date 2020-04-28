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

  return (
    <div>
      <Image fixed={data.avatar.childImageSharp.fixed}/>
      <Link 
        to="/artists"
        className="logoMenuItem">Artists</Link>
      <Link 
        to="/releases"
        className="logoMenuItem">Releases</Link>  
    </div>
  )
}

export default LogoMenu
