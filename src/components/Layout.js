import React from "react"
import Footer from "./Footer"
import Seo from "./Seo"
import Navbar from "./Navbar"
const Layout = ({ children }) => {
  return (
    <>
      <Seo />
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  )
}

export default Layout
