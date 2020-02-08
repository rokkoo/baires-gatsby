import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/layout"
import SEO from "../components/seo"

// Styles
import { Section, Title, Text, Content } from "../global.styles"
import { List, Point } from "../services.style"

const FiscalPage = () => {
  const data = useStaticQuery(graphql`
    query {
      fiscal: file(relativePath: { eq: "carousel/im7.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 400, maxHeight: 70) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  return (
    <Layout>
      <SEO title="Tipos de servicios" />
      <Img
        style={{ minHeight: 200 }}
        fluid={data.fiscal.childImageSharp.fluid}
        alt="Servicio fiscal"
      />
      <Content>
        <Section>
          <Title>Servicio físcal</Title>
          <Text>
            Nos ocupamos de todas las obligaciones fiscales de tu negocio o
            empresa. Debido a la complejidad de la normativa tributaria y cada
            vez más exigencias en ese ámbito, te ayudamos en la confección y
            presentación de los modelos necesarios para siempre cumplas con tus
            obligaciones formales.
          </Text>
        </Section>
        <Section>
          <Text>
            En <b>BAIRES ASESORAMIENTO</b> encontrarás la experiencia y
            confianza que necesitas. Algunos de nuestros servicios son:
          </Text>
          <List>
            <Point>
              Declaraciones de <b>IVA</b>
            </Point>
            <Point>
              Declaraciones de Retenciones de Personal, Profesionales,
              Alquileres, Rendimientos de Capital Mobiliario
            </Point>
            <Point>Pagos Fraccionados</Point>
            <Point>Impuesto sobre la Renta de las Personas Físicas</Point>
            <Point>Impuesto de Sociedades</Point>
          </List>
        </Section>
      </Content>
    </Layout>
  )
}

export default FiscalPage
