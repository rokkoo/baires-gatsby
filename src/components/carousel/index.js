import React from "react"
import { StaticQuery, graphql } from "gatsby"
import { Carousel } from "antd"
import BackgroundImage from "gatsby-background-image"

export default () => (
  <StaticQuery
    query={graphql`
      query {
        allFile(filter: { relativeDirectory: { eq: "carousel" } }) {
          edges {
            node {
              childImageSharp {
                fluid(quality: 90) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    `}
    render={data => (
      <Carousel autoplay>
        {data.allFile.edges.map((pic, i) => (
          <>
            <BackgroundImage
              key={i}
              Tag="section"
              fluid={pic.node.childImageSharp.fluid}
              backgroundColor={`#040e18`}
              style={{
                height: 300,
                display: "flex",
                justifyContent: "center",
                alignItems: "flex-end",
              }}
            ></BackgroundImage>
          </>
        ))}
      </Carousel>
    )}
  />
)
