import React from "react"

import { graphql } from "gatsby"

import DisplayCell from "../components/displayCell"
import DisplayGridList from "../components/displayGridList"
import Layout from "../components/layout"
import LogoMenu from "../components/logoMenu"

import GridListTile from "@material-ui/core/GridListTile"

const Artists = ({ data, location }) => {
  const artists = data.allMarkdownRemark.nodes
  return (
    <Layout>
      <LogoMenu location={location} />
      <DisplayGridList>
        {artists.map((item, index) => {
          const artist = item.frontmatter
          return (
            <GridListTile key={index}>
              <DisplayCell
                item={item}
                key={index}
                image={artist.image}
                title={artist.name}
                onClickListener={() => {
                  window.open(artist.artistUrl, "_blank")
                }}
              />
            </GridListTile>
          )
        })}
      </DisplayGridList>
    </Layout>
  )
}

export default Artists

export const pageQuery = graphql`
  {
    allMarkdownRemark(filter: { fileAbsolutePath: { regex: "/artists/" } }) {
      nodes {
        excerpt
        fields {
          slug
        }
        frontmatter {
          artistUrl
          image
          name
        }
      }
    }
  }
`
