import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

// Styles
import { Section, Title, Content, Text } from "../index.styles"

// Components
import Carousel from "../components/carousel"
import Form from "../components/form"
import Services from "../components/services"

const IndexPage = () => {
  return (
    <Layout>
      <SEO title="Asesoría irún" />
      <Carousel />
      <Content>
        <Section>
          <Title>
            Asesoría contable, fiscal y laboral ubicada en el centro de Irún
          </Title>
          <Text>
            Te encuentras agobiado, desorientado por todos los trámites y
            requisitos que debes cumplir para desarrollar tu actividad,
            necesitas mejorar el rendimiento de tu empresa, o estás buscando un
            cambio, somos tu solución, encontrarás una atención personalizada,
            cordial y con un lenguaje simple, sin tecnicismos, serás atendido
            con el tiempo necesario para tus consultas. Estamos junto a ti para
            acompañarte y ayudarte con la actividad.
          </Text>
          <Services />
          <Form />
        </Section>
      </Content>
    </Layout>
  )
}

export default IndexPage
