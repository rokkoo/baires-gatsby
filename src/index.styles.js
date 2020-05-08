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
  /* text-align: center; */
`

export const Title = styled.h3`
  align-self: center;
  font-size: ${props => (props.big ? 1.7 : 1.4)}rem;
  align-self: ${props => (props.start ? "flex-start" : "none")};
`

export const Text = styled.span`
  font-size: 15px;
  font-weight: 300;
  color: #353b48;
  letter-spacing: 0.1px;
  font-weight: 400;
`
