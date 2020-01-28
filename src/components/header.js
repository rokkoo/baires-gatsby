import React, { useState, useRef } from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"

// Styles
import { Header, MenuWrapper } from "./styles"

// Hooks
import { useOnClickOutside } from "../hooks/useOnClickOutside"

// Components
import Menu from "./menu"
import LongMenu from "./longMenu"
import Burger from "./burger"

const HeaderComponent = ({ siteTitle }) => {
  const [open, setOpen] = useState(false)
  const menuRef = useRef()
  useOnClickOutside(menuRef, setOpen)

  return (
    <Header>
      <p>Baires-asesoría</p>
      <MenuWrapper ref={menuRef}>
        <LongMenu />
        <Burger open={open} setOpen={setOpen} />
        <Menu open={open} setOpen={setOpen} />
      </MenuWrapper>
    </Header>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default HeaderComponent
