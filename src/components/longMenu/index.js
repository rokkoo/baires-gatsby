import React, { useState } from "react"
import { Menu, Icon } from "antd"
import { Link } from "gatsby"

// Styles
import { Wrapper } from "./styles"

const { SubMenu } = Menu

const MenuComponent = () => {
  const [current, setCurrent] = useState("mail")
  const handleClick = e => setCurrent(e.key)

  return (
    <Wrapper>
      <Menu onClick={handleClick} selectedKeys={[current]} mode="horizontal">
        <Menu.Item key="mail">
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
            <Menu.Item key="setting:1">
              <Link to="/laboral">Laboral</Link>
            </Menu.Item>
            <Menu.Item key="setting:2">
              <Link to="/fiscal">Físcal</Link>
            </Menu.Item>
            <Menu.Item key="setting:3">
              <Link to="emprendedores">Emprendedores</Link>
            </Menu.Item>
          </Menu.ItemGroup>
        </SubMenu>
        <Menu.Item key="alipay">
          <Icon type="mail" />
          Contacto
        </Menu.Item>
      </Menu>
    </Wrapper>
  )
}

export default MenuComponent
