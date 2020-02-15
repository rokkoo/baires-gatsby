import React, { useState, useEffect } from "react"
import { StyledMenu, Link } from "./styles"
import { Divider } from "antd"

const Menu = ({ open, setOpen }) => {
  const [currentPageName, setCurrent] = useState()

  useEffect(() => {
    setCurrent(sessionStorage.getItem("key") || "home")
  }, [])

  const closeMenu = name => {
    console.log(name)

    sessionStorage.setItem("key", name)
    setCurrent(name)
    setOpen(false)
  }

  return (
    <StyledMenu open={open}>
      <Link
        to="/"
        active={currentPageName === "home"}
        onClick={() => closeMenu("home")}
      >
        <span role="img" aria-label="about us"></span>
        Home
      </Link>
      <Divider orientation="left" />
      <Link
        to="/laboral"
        active={currentPageName === "laboral"}
        onClick={() => closeMenu("laboral")}
      >
        <span role="img" aria-label="price"></span>
        Laboral
      </Link>
      <Link
        to="/fiscal"
        active={currentPageName === "fiscal"}
        onClick={() => closeMenu("fiscal")}
      >
        <span role="img" aria-label="contact"></span>
        Fiscal
      </Link>
      <Link
        to="/emprendedores"
        active={currentPageName === "emprendedores"}
        onClick={() => closeMenu("emprendedores")}
      >
        <span role="img" aria-label="contact"></span>
        Emprendedores
      </Link>
      <Divider orientation="left" />
      <Link
        to="#form-contact"
        active={currentPageName === "mail"}
        onClick={() => closeMenu("mail")}
      >
        <span role="img" aria-label="contact"></span>
        Contacto
      </Link>
    </StyledMenu>
  )
}
export default Menu
