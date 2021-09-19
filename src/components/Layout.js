import React from "react"
import Footer from "./Footer"
import Seo from "./Seo"
import Navbar from "./Navbar"
const Layout = ({ children }) => {
  return (
    <>
      <Seo title="La TV che vogliamo!" />
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  )
}

export default Layout
