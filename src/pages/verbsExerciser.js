import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Layout from "../components/layout/layout"
import Seo from "../components/seo"
import VerbPractice from "../components/verbPractice/verbPractice"


export default function Home() {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <Layout>
      <Seo title="about" />
      <VerbPractice className="grid-container" />

    </Layout>
  )
}