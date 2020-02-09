import styled from "styled-components"
import { theme } from "../theme"

export const ImagesWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  color: ${theme.primaryLight};
  font-size: 1.2rem;
  overflow: none;

  @media (min-width: ${({ theme }) => theme.mobile}) {
    flex-wrap: nowrap;

    div {
      width: 100%;
      height: 100%;
      :hover {
        .gatsby-image-wrapper {
          filter: grayscale(100%);
        }
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
  cursor: pointer;

  .gatsby-image-wrapper {
    filter: blur(1px);
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    border-radius: 2px;
  }

  :first-child {
    height: auto;
    transition: 0.5s ease;
  }

  @media (min-width: ${({ theme }) => theme.mobile}) {
    .gatsby-image-wrapper {
      filter: blur(0);
    }
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
      /* filter: grayscale(100%); */
    }
  }

  a {
    color: white;
  }
`
