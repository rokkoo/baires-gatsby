import React, { useState } from "react"
import { Menu, Icon } from "antd"

// Styles
import { Wrapper } from "./styles"

const { SubMenu } = Menu

const MenuComponent = () => {
  const [current, setCurrent] = useState("mail")
  const handleClick = e => setCurrent(e.key)

  return (
    <Wrapper>
      <Menu
        onClick={handleClick}
        selectedKeys={[current]}
        mode="horizontal"
      >
        <Menu.Item key="mail">
          <Icon type="home" />
          Inicio
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
            <Menu.Item key="setting:1">Laboral</Menu.Item>
            <Menu.Item key="setting:2">Físcal</Menu.Item>
            <Menu.Item key="setting:3">Contable financiero</Menu.Item>
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
