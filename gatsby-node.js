const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)
const artistsTemplate = path.resolve("./src/templates/artists.js")
const releasesTemplate = path.resolve(`./src/templates/releases.js`)

/**
 * Gatsby createPages() callback
 */
exports.createPages = async ({ graphql, actions }) => {
  // Do nothing?
}

/**
 * Gatsby onCreateNode() callback
 */
exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions

  if (node.internal.type === `MarkdownRemark`) {
    const value = createFilePath({ node, getNode })
    createNodeField({
      name: `slug`,
      node,
      value,
    })
  }
}
