import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import Img from "gatsby-image"
import { Divider } from "antd"

// Styles
import { ImagesWrapper, Block, Middle } from "./styles"

const Services = () => {
  const data = useStaticQuery(graphql`
    query {
      laboral: file(relativePath: { eq: "carousel/im1.jpg" }) {
        childImageSharp {
          # Specify a fixed image and fragment.
          # The default width is 400 pixels
          fixed(height: 300, width: 200) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      fiscal: file(relativePath: { eq: "carousel/im3.jpg" }) {
        childImageSharp {
          # Specify a fixed image and fragment.
          # The default width is 400 pixels
          fixed(height: 300, width: 200) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      contable: file(relativePath: { eq: "carousel/im4.jpg" }) {
        childImageSharp {
          # Specify a fixed image and fragment.
          # The default width is 400 pixels
          fixed(height: 300, width: 200) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)

  return (
    <>
      <Divider orientation="left">Servicios</Divider>
      <ImagesWrapper>
        <Block>
          <Link to="/laboral">
            <Img
              fixed={data.laboral.childImageSharp.fixed}
              alt="Servicio laboral"
            />
            <Middle>
              <Link to="/laboral">
                <p>Laboral</p>
              </Link>
            </Middle>
          </Link>
        </Block>
        <Block>
          <Img
            fixed={data.fiscal.childImageSharp.fixed}
            alt="Servicio fiscal"
          />
          <Middle>
            <Link to="/fiscal">
              <p>Físcal</p>
            </Link>
          </Middle>
        </Block>
        <Block>
          <Img
            fixed={data.contable.childImageSharp.fixed}
            alt="Servicio contable"
          />
          <Middle>
            <Link to="/emprendedores">
              <p>Emprendedores</p>
            </Link>
          </Middle>
        </Block>
      </ImagesWrapper>
    </>
  )
}

export default Services
