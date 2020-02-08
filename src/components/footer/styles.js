import styled from "styled-components"
import { theme } from "../theme"

export const Footer = styled.footer`
  display: flex;
  flex-wrap: wrap;
  padding: 10px 20px;
  justify-content: space-evenly;
  background-color: ${theme.primaryDark};
  color: ${theme.primaryLight};
`

export const Title = styled.h2`
  margin: 0;
  padding: 0;
  color: ${theme.primaryLight};

  text-decoration: underline;
`

export const Block = styled.div`
  display: flex;
  padding: 5px;
  align-items: center;
`

export const Text = styled.p`
  margin: 0;
  padding: 0;
  opacity: ${props => (props.primary ? 0.8 : 0.7)};
`

export const MapUrl = styled.a`
  text-decoration: none;
  margin-left: 5px;
  padding: 0;
`

export const InformationWrapper = styled.section`
  display: grid;
  gap: 10px;
  align-content: center;
  padding: 10px;

  @media (min-width: ${({ theme }) => theme.mobile}) {
    padding: 0;
  }
`

export const MapWrapper = styled.div``

export const AddressWrapper = styled.address``

export const HourWrapper = styled.div``

export const ContactWrapper = styled.div``
