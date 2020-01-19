import styled from "styled-components"

export const Wrapper = styled.div`
  display: flex;

  @media (max-width: ${({ theme }) => theme.mobile}) {
    display: none;
  }
`
