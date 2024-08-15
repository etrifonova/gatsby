import * as React from 'react'
import Layout from '../components/Layout'
import Seo from '../components/seo'
import {
  indexText
} from "./page.module.css";

const AboutPage = () => {
  return (
    <Layout pageTitle="About Me">
      <p className={indexText}>Hi there! I'm the proud creator of this site, which I built with Gatsby. Still far from being an expert in it, but feeling rather enthusiastic about the whole thing</p>
    </Layout>
  )
}
export const Head = () => <Seo title="About Page" />

export default AboutPage