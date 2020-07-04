const { siteMetadata } = require('./src/config/metadata');
const { gatsbyPluginManifest } = require('./src/config/manifest');
const { gatsbyPluginFileSystem } = require('./src/config/filesystem');

module.exports = {
  pathPrefix: "/",
  siteMetadata: siteMetadata,
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-typescript`,
    `gatsby-plugin-theme-ui`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-yaml`,
    `gatsby-transformer-remark`,
    ...gatsbyPluginFileSystem,
    gatsbyPluginManifest
  ]
}
