import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import Image from '../components/image'
import SEO from '../components/seo'
import TextGenerator from '../components/TextGenerator'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <h1>Add some 'ruff!' to your stuff.</h1>
    <h3>Puppy-fied text for dog lovers.</h3>
    <TextGenerator />
    
    <Link to="/page-2/">About this project</Link>
  </Layout>
)

export default IndexPage
