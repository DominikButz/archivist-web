'use client';
import * as React from "react"
import PropTypes from "prop-types"
import NavigationBar from "./navbar";
import Footer from "./footer"

const Layout = ({ children, displayFooter=true }) => {


  return (
    <main className="flex flex-col h-screen">
      <NavigationBar siteTitle='Archivist' />
    
        {children}

        { displayFooter === true && <Footer position={'fixed'} /> }
        
    </main>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
