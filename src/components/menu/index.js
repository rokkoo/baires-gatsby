import React, { useState, useEffect } from "react"
import { StyledMenu, Link } from "./styles"
import { Divider } from "antd"

const Menu = ({ open, setOpen, selectedMenu, changeMenu }) => {
  const closeMenu = name => {
    changeMenu(name)
    setOpen(false)
  }

  return (
    <StyledMenu open={open}>
      <Link
        to="/"
        active={selectedMenu === "home"}
        onClick={() => closeMenu("home")}
      >
        <span role="img" aria-label="about us"></span>
        Home
      </Link>
      <Divider orientation="left" />
      <Link
        to="/laboral"
        active={selectedMenu === "laboral"}
        onClick={() => closeMenu("laboral")}
      >
        <span role="img" aria-label="price"></span>
        Laboral
      </Link>
      <Link
        to="/fiscal"
        active={selectedMenu === "fiscal"}
        onClick={() => closeMenu("fiscal")}
      >
        <span role="img" aria-label="contact"></span>
        Fiscal
      </Link>
      <Link
        to="/emprendedores"
        active={selectedMenu === "emprendedores"}
        onClick={() => closeMenu("emprendedores")}
      >
        <span role="img" aria-label="contact"></span>
        Emprendedores
      </Link>
      <Divider orientation="left" />
      <Link
        to="#form-contact"
        active={selectedMenu === "mail"}
        onClick={() => closeMenu("mail")}
      >
        <span role="img" aria-label="contact"></span>
        Contacto
      </Link>
    </StyledMenu>
  )
}
export default Menu
