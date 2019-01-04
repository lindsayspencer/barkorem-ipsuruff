import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'

const SecondPage = () => (
  <Layout>
    <SEO title="Page two" />
    <h1>About this site</h1>
    <h3><i class="twitter icon"></i> @lindscatspencer</h3>
    <h3><i class="github icon"></i> @lindsayspencer</h3>
    <p>Built with React.js and Gatsby.js, this site creates 1 - 5 paragraphs (small, medium, or large) of randomly generated text. Barkorem Ipsuruff is based on the original Lorem Ipsum text, with 'bark' replacing the first letter of some words, and 'ruff' replacing the last letter of others. Made for dog lovers, but all can enjoy! :)</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default SecondPage
