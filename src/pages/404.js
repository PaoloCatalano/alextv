import React from "react"
import { Link } from "gatsby"
import Layout from "../components/Layout"
const Error = () => {
  return (
    <Layout>
      <main>
        <h1 style={{ textAlign: "center", color: "var(--yellow-logo)" }}>
          Sorry, this page doesn't exist.
        </h1>
        <Link to="/" className="btn">
          home
        </Link>
      </main>
    </Layout>
  )
}

export default Error
