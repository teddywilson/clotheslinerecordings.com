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
        }
      }
    }
  `)

  const address = data.markdownRemark.frontmatter.address
  const email = data.markdownRemark.frontmatter.email
  const hred = "mailto:".concat(email)

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
          onClickListener={() => {
            window.open(data.node.frontmatter.facebookUrl, "_blank")
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
          onClickListener={() => {
            window.open(data.node.frontmatter.instgramUrl, "_blank")
          }}
        />
        <FontAwesomeIcon
          className="socialIcon"
          icon={faYoutube}
          size="lg"
          onClickListener={() => {
            window.open(data.node.frontmatter.youtubeUrl, "_blank")
          }}
        />
      </div>
    </div>
  )
}

export default Footer
