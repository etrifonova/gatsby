import { useStaticQuery, graphql } from "gatsby";

export const useMediaItems = () => {
  const data = useStaticQuery(graphql`
    query MediaItemsQuery {
      wpMediaItem {
        id
        gatsbyImage(
          width: 720
          layout: CONSTRAINED
          placeholder: TRACED_SVG
          formats: PNG
        )
      }
    }
  `);
  return data;
};
