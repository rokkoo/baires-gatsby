import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/layout"
import SEO from "../components/seo"

// Styles
import { Section, Title, Text, Content } from "../index.styles"
import { List, Point } from "../services.style"

const ContablePage = () => {
  const data = useStaticQuery(graphql`
    query {
      fiscal: file(relativePath: { eq: "carousel/im8.jpg" }) {
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
          <Title>Servicio contable / mercantil</Title>
          <Text>
            Nos encargamos de la contabilidad de tu negocio para que puedas
            despreocuparte y tener más tiempo libre para las actividades que más
            te gusta realizar, además te mantenemos informado periódicamente de
            la evolución de tu actividad.
          </Text>
        </Section>
        <Section>
          <Text>Algunos de nuestros servicios son:</Text>
          <List>
            <Point>Asesoramiento integral</Point>
            <Point>Contabilización de facturas y extractos bancarios</Point>
            <Point>Libros de Facturas Emitidas y Recibidas</Point>
            <Point>
              Balances de Sumas y Saldos, de Situación y Cuadro de Resultados
            </Point>
            <Point>Análisis de Balances</Point>
            <Point>
              Presentación de Libros y Cuentas Anuales en el Registro Mercantil
            </Point>
            <Point>Resúmenes trimestrales de la actividad</Point>
            <Point>Disolución y Liquidación de Sociedades</Point>
          </List>
        </Section>
      </Content>
    </Layout>
  )
}

export default ContablePage
