import React from "react"

const Title = ({ title = "title" }) => {
  return (
    <div className="title">
      <h2>
        <span>Alex Tv</span> {title}
      </h2>
    </div>
  )
}

export default Title
