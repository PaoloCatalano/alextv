import React from "react"
import { StaticImage } from "gatsby-plugin-image"

export default function Logo({ width = 80 }) {
  return (
    <div style={{ width }}>
      <StaticImage
        src="../images/ALEXtvScreen.png"
        alt="Alex Tv"
        placeholder="blurred"
        layout="fullWidth"
      />
    </div>
  )
}
