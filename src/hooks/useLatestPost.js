import { useStaticQuery, graphql } from "gatsby";

export const useLatestPost = () => {
  const data = useStaticQuery(graphql`
    query LatestPostQuery {
      wpPost {
        id
        title
        excerpt
      }
    }
  `);
  return data;
};
