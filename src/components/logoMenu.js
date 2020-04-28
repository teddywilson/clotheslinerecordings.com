import React from "react"
import { useStaticQuery, graphql } from "gatsby"
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
      <div class="logoMenuItem"><a href="www.google.com">Artists</a></div>
      <div class="logoMenuItem"><a href="www.google.com">Releases</a></div>
    </div>
  )
}

export default LogoMenu
