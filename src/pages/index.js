import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

// Styles
import { Section, Title, Content, Text } from "./index.style"

// Components
import Carousel from "../components/carousel"

const IndexPage = () => {
  return (
    <Layout>
      <SEO title="Home" />
      <Carousel />
      <Content>
        <Section>
          <Title>
            Asesoría contable, fiscal y laboral ubicada en el centro de Irún
          </Title>
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
        </Section>
      </Content>
    </Layout>
  )
}

export default IndexPage
