import React from "react"
import { useStaticQuery, graphql } from "gatsby"

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
    </div>
  )
}

export default Footer
