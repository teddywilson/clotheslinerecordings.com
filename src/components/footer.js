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

  return (
    <div
      className="footerContainer"
      style={{
        backgroundColor: "white"
      }}
    >
      <div className="footerHeader">Contact</div>
      <div className="footerSubtext">
        {data.markdownRemark.frontmatter.email}
      </div>
      <div className="footerSubtext">
        {data.markdownRemark.frontmatter.address}
      </div>
    </div>
  )
}

export default Footer
