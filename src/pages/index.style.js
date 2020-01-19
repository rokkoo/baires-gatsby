import styled from "styled-components"

export const Content = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
`

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  padding: 15px;
  border-radius: 6px;
  background-color: #fff;
  color: ${({ theme }) => theme.primaryDark};
  max-width: ${({ theme }) => theme.mobile};
`

export const Title = styled.h3`
  align-self: center;
  font-size: 1.2rem;
`

export const Text = styled.span`
  font-size: 15px;
  font-weight: 300;
  color: rgba(0, 0, 0, 0.51);
  letter-spacing: 0.1px;
`
