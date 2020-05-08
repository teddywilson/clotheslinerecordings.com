const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)
const artistsTemplate = path.resolve("./src/templates/artists.js")
const releasesTemplate = path.resolve(`./src/templates/releases.js`)

/**
 * Gatsby createPages() callback
 */
exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  // Fetch artists
  const artistsResult = await graphql(artistsQuery)
  if (artistsResult.errors) {
    throw artistsResult.errors
  }

  // Fetch Releases
  const releasesResult = await graphql(releasesQuery)
  if (releasesResult.errors) {
    throw releasesResult.errors
  }

  // Create /artists page
  const artists = artistsResult.data.allMarkdownRemark.edges
  createPage({
    path: "/artists/",
    component: artistsTemplate,
    context: {
      artists
    }
  })

  // Create /releases page
  const releases = releasesResult.data.allMarkdownRemark.edges
  createPage({
    path: "/releases/",
    component: releasesTemplate,
    context: {
      releases
    }
  })
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
      value
    })
  }
}

/**
 * /artists markdown query
 */
const artistsQuery = `query {
  allMarkdownRemark(
    filter: { fileAbsolutePath: { regex: "/artists/" } }
  ) {
    edges {
      node {
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
}
`

/**
 * /releases markdown query
 */
const releasesQuery = `query {
  allMarkdownRemark(
    filter: { fileAbsolutePath: { regex: "/releases/" } }
    sort: { fields: [frontmatter___date], order: DESC }
  ) {
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
          date
          image
          title
        }
      }
    }
  }
}
`
