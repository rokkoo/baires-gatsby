import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/layout"
import SEO from "../components/seo"

// Styles
import { Section, Title, Text, Content } from "./index.style"
import { List, Point } from "./services.style"

const LaboralPage = () => {
  const data = useStaticQuery(graphql`
    query {
      fiscal: file(relativePath: { eq: "carousel/im1.jpg" }) {
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
      <Img fluid={data.fiscal.childImageSharp.fluid} alt="Servicio fiscal" />
      <Content>
        <Section>
          <Title>Servicio laboral</Title>
          <Text>
            Te ofrecemos el asesoramiento para todas las gestiones que tengas
            que realizar a la hora de la contratación de empleados, cambios de
            funciones o despidos, así como en la relación cotidiana con tu
            personal.
          </Text>
        </Section>
        <Section>
          <Text>
            <b>Algunos de nuestros servicios son:</b>
          </Text>
          <List>
            <Point>Inscripción de la empresa en la Seguridad Social</Point>
            <Point>Afiliación, altas y bajas de empleados</Point>
            <Point>Variación de datos</Point>
            <Point>Confección y comunicación de contratos</Point>
            <Point>Confección y envío de las nóminas</Point>
            <Point>
              Preparación, elaboración y envío de los Boletines de Cotización
            </Point>
            <Point>
              Tramitación en el Sistema Red de los partes de baja, confirmación
              y alta por Incapacidad Temporal.
            </Point>
            <Point>Finiquitos y Certificados de empresa.</Point>
          </List>
        </Section>
      </Content>
    </Layout>
  )
}

export default LaboralPage
