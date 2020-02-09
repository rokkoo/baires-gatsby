import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/layout"
import SEO from "../components/seo"

// Styles
import { Section, Title, Content, Text } from "../index.styles"

// Components
import Carousel from "../components/carousel"
import Form from "../components/form"
import Services from "../components/services"

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query {
      fiscal: file(relativePath: { eq: "help.jpg" }) {
        childImageSharp {
          fixed(width: 250) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)
  return (
    <Layout>
      <SEO title="Home" />
      <Carousel />
      <Content>
        <Section>
          <Title>
            Asesoría contable, fiscal y laboral ubicada en el centro de Irún
          </Title>
          <div style={{ textAlign: "center" }}>
            <Img fixed={data.fiscal.childImageSharp.fixed} alt="Ayuda" />
          </div>
          <Text>
            Si estás agobiado con tantos papeles, desorientado con tantos
            trámites, si no sabes qué hacer para cumplir con todos las
            obligaciones que se requieren actualmente para estar al día con las
            Administraciones, o simplemente estás buscando un cambio, somos tu
            solución. En nosotros encontrarás una atención personalizada,
            cordial y con un lenguaje cercano y simple sin tecnicismos. Te
            atenderemos dedicándote todo el tiempo que necesites para tus
            consultas o resolver tus dudas.
          </Text>
          <Services />
          <Form />
        </Section>
      </Content>
    </Layout>
  )
}

export default IndexPage
