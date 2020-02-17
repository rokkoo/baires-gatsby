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
        Home
      </Link>
      <Divider orientation="left" />
      <Link
        to="/contable"
        active={selectedMenu === "contable"}
        onClick={() => closeMenu("contable")}
      >
        Contable
      </Link>
      <Link
        to="/laboral"
        active={selectedMenu === "laboral"}
        onClick={() => closeMenu("laboral")}
      >
        Laboral
      </Link>
      <Link
        to="/fiscal"
        active={selectedMenu === "fiscal"}
        onClick={() => closeMenu("fiscal")}
      >
        Fiscal
      </Link>
      <Link
        to="/emprendedores"
        active={selectedMenu === "emprendedores"}
        onClick={() => closeMenu("emprendedores")}
      >
        Emprendedores
      </Link>
      <Divider orientation="left" />
      <Link
        to="#form-contact"
        active={selectedMenu === "mail"}
        onClick={() => closeMenu("mail")}
      >
        Contacto
      </Link>
    </StyledMenu>
  )
}
export default Menu
