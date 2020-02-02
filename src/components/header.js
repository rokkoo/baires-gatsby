import React, { useState, useRef } from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import Img from "gatsby-image"
import PropTypes from "prop-types"

// Styles
import {
  Header,
  MenuWrapper,
  Banner,
  Content,
  BannerText,
  Block,
} from "./styles"

// Hooks
import { useOnClickOutside } from "../hooks/useOnClickOutside"

// Components
import Menu from "./menu"
import LongMenu from "./longMenu"
import Burger from "./burger"

import { Icon } from "antd"

const HeaderComponent = ({ siteTitle }) => {
  const [open, setOpen] = useState(false)
  const menuRef = useRef()

  useOnClickOutside(menuRef, setOpen)

  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "SmallLogo.png" }) {
        childImageSharp {
          # Specify a fixed image and fragment.
          # The default width is 400 pixels
          fixed(height: 60) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)

  return (
    <Header>
      <Banner>
        <Block>
          <Icon type="phone" />
          <BannerText>943-532-029</BannerText>
        </Block>
        <Block>
          <Icon type="mobile" />
          <BannerText>688-764-745</BannerText>
        </Block>
      </Banner>
      <Content>
        <Link to="/">
          <Img
            fixed={data.file.childImageSharp.fixed}
            alt="Baires-asesoria logo"
          />
        </Link>
        <MenuWrapper ref={menuRef}>
          <LongMenu />
          <Burger open={open} setOpen={setOpen} />
          <Menu open={open} setOpen={setOpen} />
        </MenuWrapper>
      </Content>
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
