import React from "react"

import { useStaticQuery, graphql } from "gatsby"
import DisplayCell from "./displayCell"
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';

const ArtistsList = ({ children }) => {

  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark(filter: {fileAbsolutePath: {regex: "/artists/"}}) {
        edges {
          node {
            excerpt
            fields {
              slug
            }
            frontmatter {
              name
              image
            }
          }
        }
      }
    }
  `);

  const artists = data.allMarkdownRemark.edges

  return (
    <div>
        <GridList cellHeight="auto" cols={3}>
        {artists.map((item, index) => (
          <GridListTile key={index}>
            <DisplayCell
              key={index}
              item={item}
              image={item.node.frontmatter.image}
              title={item.node.frontmatter.name}/>
          </GridListTile>
        ))}
      </GridList>    
    </div>
  )
}

export default ArtistsList