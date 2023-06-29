module.exports = {
  siteMetadata: {
    title: `Aperturepedia`,
    description: `Aperturepedia: a comprehensive guide to vintage first-party SLR lenses.`,
    keywords: `Aperturepedia Minolta SR Rokkor MC MD nikon nikkor canon fd fl olympus om zuiko pentax takumar m42 m37 smc konica hexanon lenses lens aperture review guide database table list SLR cameras`,
    author: `Nick Klein`,
    siteUrl: `https://aperturepedia.com`
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-json`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-sitemap`,
    // `gatsby-plugin-loadable-components-ssr`, // TODO: Migrate to react.lazy
    {
      resolve: `gatsby-plugin-material-ui`,
      options: {
        stylesProvider: {
          injectFirst: true,
        },
      },
    },
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-plugin-react-helmet-canonical-urls`,
      options: {
        siteUrl: `https://aperturepedia.com`,
        noTrailingSlash: false
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
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `./src/resources/`,
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: `UA-38789595-2`,
        siteSpeedSampleRate: 100,
        head: true
      },
    },
    // {
    //   resolve: 'gatsby-plugin-web-vitals',
    //   options: {
    //     // The Google Analytics property ID; the reporting code won't be generated without it
    //     trackingId: `UA-38789595-2`,
    //     // An array with metrics you want to track and send to GA
    //     metrics: [`FID`, `TTFB`, `LCP`, `CLS`, `FCP`],
    //     // Event Category (optional) { string }, default 'Web Vitals'
    //     eventCategory: `Web Vitals`,
    //     // Include Web Vitals tracking in development
    //     // Defaults to false meaning Vitals will only be tracked in production.
    //     includeInDevelopment: false,
    //     // Prints metrics in the console when true
    //     debug: false,
    //   }
    // },
    {
      //  Enable this when I want to analyze bundle size
      resolve: `gatsby-plugin-webpack-bundle-analyser-v2`,
      options: {
        devMode: false,
      },
    }
    // {
    //   resolve: `gatsby-plugin-manifest`,
    //   options: {
    //     name: `Aperturepedia`,
    //     short_name: `Aperturepedia`,
    //     description: `A comprehensive guide to vintage first-party SLR lenses`,
    //     lang: `en`,
    //     start_url: `/`,
    //     background_color: `#FFFFFF`,
    //     theme_color: `#663399`,
    //     display: `standalone`,
    //     icon: `src/images/gatsby-icon.png`,
    //     cache_busting_mode: `none`
    //   },
    // },
    // // this (optional) plugin enables Progressive Web App + Offline functionality
    // // To learn more, visit: https://gatsby.dev/offline
    // // `gatsby-plugin-offline`
    // {
    //   resolve: `gatsby-plugin-offline`,
    //   options: {
    //     precachePages: [
    //       `/`,
    //       `/minolta-sr`,
    //       `/minolta-sr-links`,
    //       `/pentax-k`,
    //       `/pentax-k-links`,
    //       `/pentax-m42`,
    //       `/pentax-m42-links`,
    //       `/pentax-m37`,
    //       `/pentax-m37-links`,
    //       `/canon-fd`,
    //       `/canon-fd-links`,
    //       `/nikon-f`,
    //       `/nikon-f-links`,
    //       `/olympus-om`,
    //       `/olympus-om-links`,
    //       `/konica-ar`,
    //       `/konica-ar-links`
    //     ]
    //   }
    // }
  ]
}
