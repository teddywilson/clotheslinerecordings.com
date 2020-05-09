import React from "react"

import DisplayCell from "../components/displayCell"
import DisplayGridList from "../components/displayGridList"
import Layout from "../components/layout"
import LogoMenu from "../components/logoMenu"

import GridListTile from "@material-ui/core/GridListTile"

const ArtistsTemplate = ({ pageContext, location }) => {
  const { artists } = pageContext
  return (
    <Layout>
      <LogoMenu location={location} />
      <DisplayGridList>
        {artists.map((item, index) => {
          const artist = item.node.frontmatter
          return (
            <GridListTile key={index}>
              <DisplayCell
                item={item}
                key={index}
                image={artist.image}
                title={artist.name}
                onClickListener={() => {
                  window.open(item.node.frontmatter.artistUrl, "_blank")
                }}
              />
            </GridListTile>
          )
        })}
      </DisplayGridList>
    </Layout>
  )
}

export default ArtistsTemplate
