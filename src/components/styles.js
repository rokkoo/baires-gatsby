import styled from "styled-components"
import { theme } from "./theme"

export const Header = styled.header`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  padding: 0 16px;
  justify-content: space-between;
  align-items: center;
  align-content: center;

  min-height: 80px;

  p {
    margin: 0;
    font-weight: bolder;
  }
`

export const Content = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  padding: 18px;
  justify-content: space-between;

  @media (min-width: ${({ theme }) => theme.mobile}) {
    justify-content: center;
  }

  @media (max-width: ${({ theme }) => theme.tablet}) {
    justify-content: space-between;
  }
`

export const Block = styled.div`
  display: flex;
  align-items: center;
  letter-spacing: 0.2px;
  font-size: 1rem;

  @media (min-width: ${({ theme }) => theme.mobile}) {
    /* border-bottom: 1px solid ${theme.primaryDark}; */
    border-width: 5px;
    font-size: 1.4rem;
    background-image: linear-gradient(120deg, #d4fc79 0%, #96e6a1 100%);
    background-position: 0 100%;
    background-repeat: repeat-x;
    background-size: 1px 4px;
    transition: background-size .2s;


    :hover {
      background-size: 4px 50px;
    }
  }

  i {
    color: ${theme.primaryDark};
    font-size: 1.2rem;
    padding-right: 5px;
  }
`

export const Banner = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  justify-content: space-around;
  min-height: 60px;
  align-items: center;
  display: none;

  @media (min-width: ${({ theme }) => theme.mobile}) {
    display: inherit;
  }
`

export const BannerText = styled.p`
  color: ${props => (props.primary ? "#2ecc71" : theme.primaryDark)};
`

export const MenuWrapper = styled.div`
  display: flex;
  align-items: center;

  @media (min-width: ${({ theme }) => theme.mobile}) {
    position: absolute;
    right: 0;
  }
`

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
`
