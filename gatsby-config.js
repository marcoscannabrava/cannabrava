module.exports = {
  siteMetadata: {
    siteTitle: `Marcos Cannabrava`,
    siteTitleAlt: `Marcos Cannabrava`,
    siteHeadline: `Technology, Education, M&A, Surfing`,
    siteUrl: `https://cannabrava.co`,
    siteDescription: `Personal Portfolio Page of Marcos Cannabrava - Technology, Education, M&A, Surfing.`,
    siteLanguage: `en`,
    siteImage: `/banner.jpg`,
    author: `marcoscannabrava`
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-typescript`,
    `gatsby-plugin-emotion`,
    `gatsby-plugin-theme-ui`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
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
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
