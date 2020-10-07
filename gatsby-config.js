module.exports = {
  siteMetadata: {
    title: `Aperturepedia`,
    description: `Aperturepedia: a comprehensive guide to vintage first-party SLR lenses.`,
    keywords: `Aperturepedia Minolta SR Rokkor MC MD nikon nikkor canon fd fl olympus om zuiko pentax takumar m42 m37 smc konica hexanon lenses lens aperture review guide database table list SLR cameras`,
    author: `Nick Klein`,
    siteUrl: `http://aperturepedia.com`
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-json`,
    `gatsby-plugin-sass`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-remove-trailing-slashes`,
    {
      resolve: `gatsby-plugin-react-helmet-canonical-urls`,
      options: {
        siteUrl: `http://aperturepedia.com`,
        noTrailingSlash: true
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `./src/resources/`,
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: `UA-38789595-2`,
        trackingId: `UA-38789595-2`,
      },
    },
    // {
    //   //  Enable this when I want to analyze bundle size
    //   resolve: `gatsby-plugin-webpack-bundle-analyser-v2`,
    //   options: {
    //     devMode: false,
    //   },
    // }
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
