import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Layout from "../components/layout/layout"
import Seo from "../components/seo"
import About from "../components/about/about"

export default function Home() {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
      file(relativePath: { eq: "about.jpg" }) {
        childImageSharp {
          gatsbyImageData(
            layout: FULL_WIDTH
            placeholder: BLURRED
            quality: 80
            formats: [AUTO, WEBP, AVIF]
          )
        }
      }
    }
  `)

  return (
    <Layout>
      <Seo title="about" />
      <About />

    </Layout>
  )
}