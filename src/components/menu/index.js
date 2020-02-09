import React from "react"
import { StyledMenu } from "./styles"
import { Link } from "gatsby"
import { Divider } from "antd"

const Menu = ({ open, setOpen }) => {
  const closeMenu = () => setOpen(false)

  return (
    <StyledMenu open={open}>
      <Link to="/" onClick={closeMenu}>
        <span role="img" aria-label="about us"></span>
        Home
      </Link>
      <Divider orientation="left" />
      <Link to="/laboral">
        <span role="img" aria-label="price"></span>
        Laboral
      </Link>
      <Link to="/fiscal">
        <span role="img" aria-label="contact"></span>
        Fiscal
      </Link>
      <Link to="/emprendedores">
        <span role="img" aria-label="contact"></span>
        Emprendedores
      </Link>
      <Divider orientation="left" />
      <Link to="#form-contact">
        <span role="img" aria-label="contact"></span>
        Contacto
      </Link>
    </StyledMenu>
  )
}
export default Menu
