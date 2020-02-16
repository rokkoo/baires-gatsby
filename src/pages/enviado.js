import React from "react"
import styled from "styled-components"

import Layout from "../components/layout"
import { theme } from "../components/theme"

// Styles
const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  margin: 5%;
  color: ${theme.primaryDark};
  font-size: 1.1rem;
`

const Content = styled.div`
  width: fit-content;
  background-image: linear-gradient(
    109.6deg,
    rgba(204, 228, 247, 0.26) 11.2%,
    rgba(237, 246, 250, 0.58) 100.2%
  );
  padding: 20px;
  border-radius: 3px;
  text-align: center;

  p {
    margin: 0;
  }
`

const Enviado = () => {
  return (
    <Layout>
      <Wrapper>
        <Content>
          <p>¡Hemos recibido tu mensaje!</p>
          <p>¡Te responderemos con la mayor brevedad posible!</p>
        </Content>
      </Wrapper>
    </Layout>
  )
}

export default Enviado
