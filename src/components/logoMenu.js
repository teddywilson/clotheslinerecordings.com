import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"

import { rhythm } from "../utils/typography"

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
      site {
        siteMetadata {
          author {
            name
            summary
          }
        }
      }
    }
  `)

  const { author } = data.site.siteMetadata
  return (
    <div
      style={{
        marginBottom: rhythm(2.5),
        justifyContent: 'center', 
        flexDirection: 'column',
        justifyContent: 'space-between',

      }}>
      <Image
        fixed={data.avatar.childImageSharp.fixed}
        alt={author.name}/>
      <div class="flexbox-container"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center"
          }}>
        <div class="item"><a href="www.google.com">Artists</a></div>
        <div class="item"><a href="www.google.com">Releases</a></div>
      </div>
    </div>
  )
}

export default LogoMenu
