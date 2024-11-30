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
        url: `http://gatsbywp2.local/graphql`,
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
