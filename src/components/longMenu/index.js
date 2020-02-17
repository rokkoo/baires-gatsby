import React from "react"
import { Menu, Icon } from "antd"
import { Link } from "gatsby"

// Styles
import { Wrapper } from "./styles"

const { SubMenu } = Menu

const MenuComponent = ({ selectedMenu, changeMenu }) => {
  const handleClick = ({ key }) => changeMenu(key)

  return (
    <Wrapper>
      <Menu
        onClick={handleClick}
        selectedKeys={[selectedMenu]}
        mode="horizontal"
      >
        <Menu.Item key="home" onClick={() => changeMenu("home")}>
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
            <Menu.Item key="contable" onClick={() => changeMenu("contable")}>
              <Link to="/contable">Contable</Link>
            </Menu.Item>
            <Menu.Item key="laboral" onClick={() => changeMenu("laboral")}>
              <Link to="/laboral">Laboral</Link>
            </Menu.Item>
            <Menu.Item key="fisca" onClick={() => changeMenu("fisca")}>
              <Link to="/fiscal">Fiscal</Link>
            </Menu.Item>
            <Menu.Item
              key="emprendedores"
              onClick={() => changeMenu("emprendedores")}
            >
              <Link to="emprendedores">Emprendedores</Link>
            </Menu.Item>
          </Menu.ItemGroup>
        </SubMenu>
        <Menu.Item key="mail" onClick={() => changeMenu("mail")}>
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
