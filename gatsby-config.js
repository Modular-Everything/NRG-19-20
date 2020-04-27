module.exports = {
  siteMetadata: {
    title: `NRG`,
    description: `Creators, makers and builders.`,
    author: `@chrish-d`,
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
    `gatsby-plugin-offline`,
  ],
};
