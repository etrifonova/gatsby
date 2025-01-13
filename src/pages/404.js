import * as React from "react";
import { Link } from "gatsby";
import Layout from "../components/layout/layout";

const NotFoundPage = () => {
  return (
    <Layout>

      
      {/* <Seo title="error" /> */}
      <div className="error">
        <h1>Страница не найдена</h1>
        <p>
          К сожалению, мы не нашли страницу, которую вы искали 😔.
          </p>
          
        <Link to="/">На главную</Link>
      </div>

      {/* <section className="errorPage" style={sectionStyle}>
        <h1>Страница не найдена</h1>
        <p>
          К сожалению, мы не нашли страницу, которую вы искали 😔.
          <br />
          {process.env.NODE_ENV === "development" ? (
            <>
              <br />
              Try creating a page in <code style={codeStyles}>src/pages/</code>.
              <br />
            </>
          ) : null}
          <br />
        </p>
      </section> */}
    </Layout>
  );
};

export default NotFoundPage;

export const Head = () => <title>Not found</title>;
