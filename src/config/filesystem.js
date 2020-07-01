exports.gatsbyPluginFileSystem = [
  {
    resolve: `gatsby-source-filesystem`,
    options: {
      name: `assets`,
      path: __dirname + `/../../content/assets`,
    },
  },
  {
    resolve: `gatsby-source-filesystem`,
    options: {
      name: `projects`,
      path: __dirname + `/../../content/projects`,
    },
  },
  {
    resolve: `gatsby-source-filesystem`,
    options: {
      name: `about`,
      path: __dirname + `/../../content/about`,
    },
  }
]