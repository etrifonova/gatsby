/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  
  pathPrefix: "/gatsby/public",
  siteMetadata: {
    title: "musicians",
  },
  plugins: [
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `blog`,
        path: `${__dirname}/blog/`,
      },
    },
    "gatsby-plugin-mdx",
    "gatsby-transformer-sharp"
  ],
}
