import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import { ThemeProvider } from "styled-components"
import { GlobalStyles } from "./global"
import { theme } from "./theme"

import Header from "./header"
import Footer from "./footer"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
          telephone
          mobile
          address
        }
      }
    }
  `)

  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyles />
        <Header siteTitle={data.site.siteMetadata.title} />
        <div
          style={{
            margin: `0 auto`,
            paddingTop: 0,
          }}
        >
          <main>{children}</main>
          <Footer
            siteTitle={data.site.siteMetadata.title}
            telephone={data.site.siteMetadata.telephone}
            mobile={data.site.siteMetadata.mobile}
            address={data.site.siteMetadata.address}
          />
        </div>
      </>
    </ThemeProvider>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
