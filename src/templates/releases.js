import React from "react"

import DisplayCell from "../components/displayCell"
import DisplayGridList from "../components/displayGridList"
import Layout from "../components/layout"
import LogoMenu from "../components/logoMenu"

import GridListTile from "@material-ui/core/GridListTile"

const ReleasesTemplate = ({ pageContext }) => {
  const { releases } = pageContext
  return (
    <Layout>
      <LogoMenu />
      <DisplayGridList>
        {releases.map((item, index) => {
          const release = item.node.frontmatter
          const subtitle = release.artist + ", " + release.catalogue
          return (
            <GridListTile key={index}>
              <DisplayCell
                key={index}
                item={item}
                image={release.image}
                title={release.title}
                subtitle={subtitle}
                onClickListener={() => {
                  window.open(release.bandcampUrl, "_blank")
                }}
              />
            </GridListTile>
          )
        })}
      </DisplayGridList>
    </Layout>
  )
}

export default ReleasesTemplate
