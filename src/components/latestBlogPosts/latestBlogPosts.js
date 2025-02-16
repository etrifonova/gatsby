import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import DOMPurify from "dompurify";
import "./latestBlogPosts.css"

const LatestBlogPosts = () => {
  const data = useLatestBlogPost()
  const postExcerpt = post.node.excerpt;
  let DOMPurify;
  
  if (typeof window !== "undefined") {
    DOMPurify = require("dompurify");
  }

  const sanitizedHtmlContent = DOMPurify?.sanitize(postExcerpt);

  return (
    <div className="latestBlogPosts_container">
      <h1>Блог</h1>
      <div className="latestBlogPosts_posts">
        {data.allWpPost.edges.slice(0, 3).map((post, index) => (
          <div key={index}>
            <h4>{post.node.title}</h4>
            <div
              dangerouslySetInnerHTML={{
                __html: sanitizedHtmlContent,
              }}
            />
            {console.log(post.node.uri)}
            <Link to={`/blog${post.node.uri}`}>
              <p>Читать</p>
            </Link>
          </div>
        ))}
      </div>
    </div>
  )
}

export default LatestBlogPosts

export const useLatestBlogPost = () => {
  const data = useStaticQuery(graphql`
    query LatestBlogPostQuery {
      allWpPost(sort: { date: DESC }) {
        edges {
          node {
            title
            excerpt
            slug
            uri
          }
        }
      }
    }
  `)
  return data
}
