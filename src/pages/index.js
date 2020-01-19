import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

import styled from "styled-components"

// Components
import Carousel from "../components/carousel"

const IndexPage = () => {
  return (
    <Layout>
      <SEO title="Home" />
      <Carousel />
    </Layout>
  )
}

export default IndexPage
