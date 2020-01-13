import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

import styled from "styled-components"

const Text = styled.h1`
  font-size: 38pt;
`

const Description = styled.p`
  font-size: 14pt;
  padding: 0;
  margin: 0;
`

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Text>Baires-asesoría</Text>
    <Description>
      Esta página esta en construcción, la página estará disponible en los
      próximos días.
    </Description>
    <Description>Disculpen las molestias</Description>
  </Layout>
)

export default IndexPage
