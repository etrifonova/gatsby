import * as React from 'react'
import Layout from '../components/Layout'
import { StaticImage } from 'gatsby-plugin-image'
import Seo from '../components/seo'

const IndexPage = () => {
  return (
      
    <Layout pageTitle="Home Page">
      <h1>A website about my favorite musicians</h1>
      <p>This website was originally made thanks to the Gatsby Tutorial and then modified by me.</p>
      
      <StaticImage
        alt="a drum kit with drumsticks"
        src="../images/drums.png"
      />
    </Layout>
  )
}

export const Head = () => <Seo title="Home Page" />

export default IndexPage