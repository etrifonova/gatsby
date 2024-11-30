/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  
    siteMetadata: {
    title: "musicians",
  },
  plugins: [
    
    {
      resolve: `gatsby-source-wordpress`,
      options: {
        // url: `https://e-trifonova.pro/graphql`,
      },
    },
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
