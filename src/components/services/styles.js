import styled from "styled-components"
import { theme } from "../theme"

export const ImagesWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  color: ${theme.primaryLight};
  font-size: 1.2rem;
  cursor: pointer;
  overflow: none;

  @media (min-width: ${({ theme }) => theme.mobile}) {
    flex-wrap: nowrap;

    div {
      width: 100%;
      height: 100%;
      :hover {
        filter: grayscale(100%);
      }
    }
  }

  div {
    display: flex;
    justify-content: center;
    margin: 5px 5px;
  }
`

export const Block = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  margin: 0 5px;

  :first-child {
    height: auto;
    transition: 0.5s ease;
  }
`

export const Middle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: 0.5s ease;
  position: absolute;
  opacity: 1;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  text-align: center;

  @media (min-width: ${({ theme }) => theme.mobile}) {
    opacity: 0;
    font-weight: bold;

    :hover {
      opacity: 1;
      filter: grayscale(100%);
    }
  }
`
