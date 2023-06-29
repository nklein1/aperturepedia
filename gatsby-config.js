module.exports = {
  siteMetadata: {
    title: `Aperturepedia`,
    description: `Aperturepedia: a comprehensive guide to vintage first-party SLR lenses.`,
    keywords: `Aperturepedia Minolta SR Rokkor MC MD nikon nikkor canon fd fl olympus om zuiko pentax takumar m42 m37 smc konica hexanon lenses lens aperture review guide database table list SLR cameras`,
    author: `Nick Klein`,
    siteUrl: `https://aperturepedia.com`
  },
  trailingSlash: "never",
  plugins: [
    `gatsby-transformer-json`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-sitemap`,
    // // `gatsby-plugin-loadable-components-ssr`, // TODO: Migrate to react.lazy
    // {
    //   resolve: `gatsby-plugin-material-ui`,
    //   options: {
    //     stylesProvider: {
    //       injectFirst: true,
    //     },
    //   },
    // },
    `gatsby-plugin-sass`,
    // {
    //   resolve: `gatsby-plugin-react-helmet-canonical-urls`,
    //   options: {
    //     siteUrl: `https://aperturepedia.com`,
    //     noTrailingSlash: false
    //   },
    // },
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

    // {
    //   resolve: `gatsby-plugin-google-analytics`,
    //   options: {
    //     trackingId: `UA-38789595-2`,
    //     siteSpeedSampleRate: 100,
    //     head: true
    //   },
    // },


    // TODO: Finish integrating & validating gatsby-plugin-google-gtag
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        // You can add multiple tracking ids and a pageview event will be fired for all of them.
        trackingIds: [
          "UA-38789595-2", // Google Analytics / GA
          // "AW-CONVERSION_ID", // Google Ads / Adwords / AW
          // "DC-FLOODIGHT_ID", // Marketing Platform a/dvertising products (Display & Video 360, Search Ads 360, and Campaign Manager)
        ],
        // // This object gets passed directly to the gtag config command
        // // This config will be shared across all trackingIds
        // gtagConfig: {
        //   optimize_id: "OPT_CONTAINER_ID",
        //   anonymize_ip: true,
        //   cookie_expires: 0,
        // },
        // This object is used for configuration specific to this plugin
        pluginConfig: {
          // Puts tracking script in the head instead of the body
          head: true,
          // Setting this parameter is also optional
          respectDNT: true,
          // // Avoids sending pageview hits from custom paths
          // exclude: ["/preview/**", "/do-not-track/me/too/"],
          // Defaults to https://www.googletagmanager.com
          origin: "https://aperturepedia.com",
          // Delays processing pageview events on route update (in milliseconds)
          delayOnRouteUpdate: 0,
        },
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
