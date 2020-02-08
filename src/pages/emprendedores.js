import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/layout"
import SEO from "../components/seo"

// Styles
import { Section, Title, Text, Content } from "./index.style"
import { List, Point } from "./services.style"

const FinancieroPage = () => {
  const data = useStaticQuery(graphql`
    query {
      fiscal: file(relativePath: { eq: "carousel/im4.jpg" }) {
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
          <Title>Servicio emprendedores</Title>
          <Text>
            Cuando deseas emprender una actividad necesitas que alguien te
            asesore sobre qué forma jurídica te puede convenir más, o qué
            trámites debes realizar, nuestro equipo está totalmente capacitado
            para ayudarte, y ocuparnos por ejemplo de:
          </Text>
          <List>
            <Point>
              Altas de Actividades Económicas y Declaraciones Censales
            </Point>
            <Point>Altas de autónomos en la Seguridad Social</Point>
            <Point>
              Constitución de Sociedades (trámites con la Notaría, Registro
              Mercantil y Hacienda Foral)
            </Point>
          </List>
        </Section>
      </Content>
    </Layout>
  )
}

export default FinancieroPage
