exports.gatsbyPluginManifest = {
  resolve: `gatsby-plugin-manifest`,
  options: {
    name: `Marcos Cannabrava`,
    short_name: `Marcos`,
    description: `Technology, Education, M&A, Surfing`,
    start_url: `/`,
    background_color: `#fff`,
    theme_color: `#3182ce`,
    display: `standalone`,
    icons: [
      {
        src: `/android-chrome-192x192.png`,
        sizes: `192x192`,
        type: `image/png`,
      },
      {
        src: `/android-chrome-512x512.png`,
        sizes: `512x512`,
        type: `image/png`,
      },
    ],
  },
}