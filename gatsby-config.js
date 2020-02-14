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
    `gatsby-plugin-resolve-src`,
    {
      resolve: `gatsby-source-filesystem`,
      options: { path: `./static/images/` },
    },
    {
      resolve: `gatsby-plugin-emotion`,
      options: {},
    },
    {
      resolve: `gatsby-plugin-postcss`,
      options: {},
    },
    {
      resolve: `gatsby-source-storyblok`,
      options: {
        accessToken: `gNsoAMAmHOjdDUSVnF0xyQtt`,
        homeSlug: `home`,
        version: process.env.NODE_ENV === `production` ? `published` : `draft`,
      },
    },
  ],
};
