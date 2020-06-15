const { siteMetadata } = require('./src/config/metadata');
const { gatsbyPluginManifest } = require('./src/config/manifest');
const { gatsbyPluginFileSystem } = require('./src/config/filesystem');

module.exports = {
  siteMetadata: siteMetadata,
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-typescript`,
    `gatsby-plugin-emotion`,
    `gatsby-plugin-theme-ui`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    ...gatsbyPluginFileSystem,
    gatsbyPluginManifest
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ]
}
