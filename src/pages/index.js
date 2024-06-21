import * as React from 'react'
import Layout from '../components/Layout'
import { StaticImage } from 'gatsby-plugin-image'

const IndexPage = () => {
  return (
      
    <Layout pageTitle="Home Page">
      <h1>Welcome to my Gatsby site!</h1>
      <p>I'm making this by following the Gatsby Tutorial.</p>
      
      <StaticImage
        alt="a drum kit with drumsticks"
        src="../images/drums.png"
      />
    </Layout>
  )
}

export const Head = () => <title>Home Page</title>

export default IndexPage