import React from "react"

import { useStaticQuery, graphql } from "gatsby"
import DisplayCell from "./displayCell"
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';


const ReleasesList = ({ children }) => {

  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark(filter: {fileAbsolutePath: {regex: "/releases/"}}) {
        edges {
          node {
            excerpt
            fields {
              slug
            }
            frontmatter {
              bandcampUrl
              catalogue
              title
              image
            }
          }
        }
      }
    }
  `);

  const releases = data.allMarkdownRemark.edges

  return (
    <div>
      <GridList cellHeight="auto" cols={3}>
        {releases.map((item, index) => (
          <GridListTile key={index}>
            <DisplayCell
            key={index}
            item={item}
            image={item.node.frontmatter.image}
            title={item.node.frontmatter.title}
            subtitle={item.node.frontmatter.catalogue}/>
          </GridListTile>
        ))}
      </GridList>
    </div>
  )
}

export default ReleasesList