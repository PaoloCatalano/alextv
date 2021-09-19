import React from "react"
import { Link } from "gatsby"
import Layout from "../components/Layout"
const Error = () => {
  return (
    <Layout>
      <main>
        <h1>404 Error</h1>
        <h3>The page you are looking for doesn't exist.</h3>
        <Link to="/" className="btn">
          home
        </Link>
      </main>
    </Layout>
  )
}

export default Error
