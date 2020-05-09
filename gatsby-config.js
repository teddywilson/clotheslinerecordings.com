module.exports = {
  siteMetadata: {
    title: `clothesline recordings`,
    menuLinks: [
      {
        name: "home",
        link: "/"
      },
      {
        name: "artists",
        link: "/artists"
      },
      {
        name: "releases",
        link: "/releases"
      }
    ],
    author: {
      name: `Clothesline Recordings`,
      email: `clotheslinerecordings@gmail.com`,
      address: `Brooklyn, NYC, 11238`
    },
    siteUrl: `localhost:8000`
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/artists`,
        name: `artists`
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/releases`,
        name: `releases`
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/assets`,
        name: `assets`
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/global`,
        name: `global`
      }
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590
            }
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`
            }
          },
          `gatsby-remark-prismjs`,
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`
        ]
      }
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: `UA-165430856-1`
      }
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Clothesline Recordings.`,
        short_name: `GatsbyJS`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `content/assets/logo.jpeg`
      }
    },
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-material-ui`
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ]
}
