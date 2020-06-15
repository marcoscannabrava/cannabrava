exports.gatsbyPluginFileSystem = [
  {
    resolve: `gatsby-source-filesystem`,
    options: {
      name: `images`,
      path: __dirname + `/../images`,
    },
  },
  {
    resolve: `gatsby-source-filesystem`,
    options: {
      name: `assets`,
      path: __dirname + `/../../content/assets`,
    },
  }
]