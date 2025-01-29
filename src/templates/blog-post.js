import React from "react";
import Layout from "../components/layout/layout";
// import DOMPurify from "dompurify";
import { graphql } from "gatsby";
import BreadCrumb from "../components/breadcrumb/breadcrumb";

export default function BlogPost({ data }) {
  const post = data.allWpPost.nodes[0];
  const category = post.categories.nodes[0];
  const postContent = post.content;
  let DOMPurify;

  if (typeof window !== "undefined") {
    DOMPurify = require("dompurify");
  }

  const sanitizedHtmlContent = DOMPurify?.sanitize(postContent);
  return (
    <Layout>
      <section className="blog__post">
        <BreadCrumb category={category.name} postTitle={post.title} />
        <h1 className="blog__post-title">{post.title}</h1>
        <span
          style={{
            display: `block`,
            color: `var(--dark-gray)`,
            fontSize: `0.9rem`,
            marginBottom: `1.5rem`,
          }}
        >
          Категория: {category.name}
        </span>
        <div className="blog__post-text" dangerouslySetInnerHTML={{ __html: sanitizedHtmlContent }} />
      </section>
    </Layout>
  );
}
export const query = graphql`
  query ($slug: String!) {
    allWpPost(filter: { slug: { eq: $slug } }) {
      nodes {
        title
        content
        categories {
          nodes {
            name
            id
          }
        }
      }
    }
    allWpCategory {
      nodes {
        name
        id
      }
    }
  }
`;
