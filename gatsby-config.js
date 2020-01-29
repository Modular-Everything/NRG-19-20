module.exports = {
  siteMetadata: {
    title: `Gatsby Tailwind 2 + Emotion / Styled Components`,
    description: `A (reasonably) unopinionated Gatsby starter, including; Tailwind 2 and Emotion`,
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
  ],
}
