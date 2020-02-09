import styled from "styled-components"

export const StyledMenu = styled.nav`
  @media (min-width: ${({ theme }) => theme.mobile}) {
    display: none;
  }

  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  background: white;
  height: 100vh;
  text-align: left;
  position: absolute;
  top: 0;
  right: 0;
  transition: transform 0.3s ease-in-out;
  z-index: 5;

  /* move menu */
  transform: ${({ open }) => (open ? "translateX(0%)" : "translateX(-100%)")};

  a {
    font-size: 1rem;
    text-transform: uppercase;
    padding: 10px 0;
    font-weight: bold;
    letter-spacing: 0.5rem;
    color: ${({ theme }) => theme.primaryDark};
    text-decoration: none;
    transition: color 0.3s linear;

    @media (max-width: ${({ theme }) => theme.mobile}) {
      text-align: center;
    }

    &:hover {
      color: ${({ theme }) => theme.primaryHover};
    }
  }
`
