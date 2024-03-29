module.exports = {
  siteMetadata: {
    title: `NRG`,
    description: `Creators, makers and builders.`,
    author: `@madewithnrg`,
    siteUrl: `https://madewithnrg.com/`,
    // Change in production
    baseUrl: 'https://madewithnrg.com/',
  },
  plugins: [
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-postcss`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-netlify-headers`,
    `gatsby-plugin-resolve-src`,
    `gatsby-plugin-emotion`,
    `gatsby-plugin-postcss`,
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-source-filesystem`,
      options: { path: `./static/images/` },
    },
    {
      resolve: `gatsby-source-storyblok`,
      options: {
        accessToken: `MfgGrrnYEMkLpAaMaWRiogtt`,
        homeSlug: `home`,
        includeLinks: true,
        version: process.env.NODE_ENV === `production` ? `published` : `draft`,
      },
    },
    {
      resolve: `gatsby-plugin-nprogress`,
      options: {
        color: `#ff1200`,
        showSpinner: false,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `NRG Agency`,
        short_name: `NRG`,
        start_url: `/`,
        background_color: `#ff1200`,
        theme_color: `#ff1200`,
        display: `standalone`,
        icon: `static/images/favicon.png`,
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: 'UA-48020924-3',
        head: false,
        exclude: ['/editor/**'],
        pageTransitionDelay: 0,
        defer: false,
      },
    },
    {
      resolve: 'gatsby-plugin-google-tagmanager',
      options: {
        id: '',
        includeInDevelopment: false,
        defaultDataLayer: { platform: 'gatsby' },
        gtmAuth: '',
        gtmPreview: '',
        dataLayerName: '',
        routeChangeEventName: '',
      },
    },
    `gatsby-plugin-offline`,
  ],
};
