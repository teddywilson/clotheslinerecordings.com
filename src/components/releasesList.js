import React from "react"

import { useStaticQuery, graphql } from "gatsby"
import DisplayCell from "./displayCell"
import DisplayGridList from "./displayGridList"
import GridListTile from "@material-ui/core/GridListTile"

const ReleasesList = ({ children }) => {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark(filter: { fileAbsolutePath: { regex: "/releases/" } }) {
        edges {
          node {
            excerpt
            fields {
              slug
            }
            frontmatter {
              artist
              bandcampUrl
              catalogue
              image
              title
            }
          }
        }
      }
    }
  `)

  const releases = data.allMarkdownRemark.edges

  return (
    <DisplayGridList>
      {releases.map((item, index) => {
        const data = item.node.frontmatter
        const subtitle = data.artist + ", " + data.catalogue
        return (
          <GridListTile key={index}>
            <DisplayCell
              key={index}
              item={item}
              image={data.image}
              title={data.title}
              subtitle={subtitle}
              onClickListener={() => {
                window.open(data.bandcampUrl, "_blank")
              }}
            />
          </GridListTile>
        )
      })}
    </DisplayGridList>
  )
}

export default ReleasesList
