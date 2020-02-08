import React, { useState } from "react"
import { Menu, Icon } from "antd"
import { Link } from "gatsby"

// Styles
import { Wrapper } from "./styles"

const { SubMenu } = Menu

const MenuComponent = () => {
  const [current, setCurrent] = useState(
    sessionStorage.getItem("key") || "home"
  )
  const handleClick = e => {
    sessionStorage.setItem("key", e.key)
    setCurrent(e.key)
  }

  return (
    <Wrapper>
      <Menu onClick={handleClick} selectedKeys={[current]} mode="horizontal">
        <Menu.Item key="home" onClick={() => setCurrent("home")}>
          <Link to="/">
            <Icon type="home" />
            Inicio
          </Link>
        </Menu.Item>
        <SubMenu
          title={
            <span className="submenu-title-wrapper">
              <Icon type="setting" />
              Servicios
            </span>
          }
        >
          <Menu.ItemGroup>
            <Menu.Item key="laboral" onClick={() => setCurrent("laboral")}>
              <Link to="/laboral">Laboral</Link>
            </Menu.Item>
            <Menu.Item key="fisca" onClick={() => setCurrent("fisca")}>
              <Link to="/fiscal">Físcal</Link>
            </Menu.Item>
            <Menu.Item
              key="emprendedores"
              onClick={() => setCurrent("emprendedores")}
            >
              <Link to="emprendedores">Emprendedores</Link>
            </Menu.Item>
          </Menu.ItemGroup>
        </SubMenu>
        <Menu.Item key="mail" onClick={() => setCurrent("mail")}>
          <Link to="#form-contact">
            <Icon type="mail" />
            Contacto
          </Link>
        </Menu.Item>
      </Menu>
    </Wrapper>
  )
}

export default MenuComponent
