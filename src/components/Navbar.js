import React from "react"
import Logo from "./Logo"

export default function Navbar() {
  return (
    <nav className="navbar">
      <div style={{ margin: "5px 10px" }}>
        <Logo />
      </div>
    </nav>
  )
}
