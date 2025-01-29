const path = require(`path`)

// exports.createPages = ({ graphql, actions }) => {
//   const { createPage } = actions
//   return graphql(`
//     {
//       allWpPost(sort: { fields: [date] }) {
//         nodes {
//           title
//           excerpt
//           content
//           slug
//         }
//       }
//     }
//   `).then(result => {
//     //highlight-start
//     result.data.allWpPost.nodes.forEach(node => {
//       createPage({
//         path: `/blog/${node.slug}/`, // было node вместо post
//         component: path.resolve(`./src/templates/blog-post.js`),
//         context: {
//           // This is the $slug variable
//           // passed to blog-post.js
//           slug: node.slug,
//         },
//       })
//     })
//     //highlight-end
//   })
// }

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  const result = await graphql(`
    query {
      allWpPost {
        nodes {
          id
          slug
        }
      }
    }
  `);

  const postTemplate = require.resolve(`./src/templates/blog-post.js`);

  result.data.allWpPost.nodes.forEach((post) => {
    createPage({
      path: `/blog/${post.slug}/`,
      component: postTemplate,
      context: {
        id: post.id, // Pass the id to the template
      },
    });
  });
};


