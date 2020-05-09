import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faFacebook,
  faInstagram,
  faYoutube
} from "@fortawesome/free-brands-svg-icons"

const Footer = () => {
  const data = useStaticQuery(graphql`
    query IndexPageQuery {
      markdownRemark(fileAbsolutePath: { regex: "/global/metadata/index/" }) {
        frontmatter {
          address
          email
          facebookUrl
          instagramUrl
          youtubeUrl
        }
      }
    }
  `)

  const address = data.markdownRemark.frontmatter.address

  const email = data.markdownRemark.frontmatter.email
  const hred = "mailto:".concat(email)

  const facebookUrl = data.markdownRemark.frontmatter.facebookUrl
  const instagramUrl = data.markdownRemark.frontmatter.instagramUrl
  const youtubeUrl = data.markdownRemark.frontmatter.youtubeUrl

  return (
    <div
      className="footerContainer"
      style={{
        backgroundColor: "white"
      }}
    >
      <div className="footerHeader">Contact</div>
      <div className="footerSubtext">
        <a href={hred}>{email}</a>
      </div>
      <div className="footerSubtext">{address}</div>
      <div
        style={{
          flexDirection: "column",
          flex: 1,
          width: "100%",
          paddingTop: 8
        }}
      >
        <FontAwesomeIcon
          className="socialIcon"
          icon={faFacebook}
          size="lg"
          onClick={() => {
            window.open(facebookUrl, "_blank")
          }}
        />
        <FontAwesomeIcon
          className="socialIcon"
          icon={faInstagram}
          size="lg"
          style={{
            paddingLeft: 4,
            paddingRight: 4
          }}
          onClick={() => {
            window.open(instagramUrl, "_blank")
          }}
        />
        <FontAwesomeIcon
          className="socialIcon"
          icon={faYoutube}
          size="lg"
          onClick={() => {
            window.open(youtubeUrl, "_blank")
          }}
        />
      </div>
    </div>
  )
}

export default Footer
