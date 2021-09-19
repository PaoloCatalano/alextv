import React from "react"
import { useGlobalContext } from "../context/context"

const Video = ({ src, title, ...props }) => {
  const { touchable, numeroCanale } = useGlobalContext()
  return (
    <div className="iframeVideoWrapper">
      <div className="video">
        <p
          style={{
            position: "absolute",
            right: "1rem",
            top: "-54px",
            color: "green",
            fontSize: "3rem",
            zIndex: 99999,
          }}
        >
          {numeroCanale}
        </p>
        <iframe
          style={{ pointerEvents: touchable ? "auto" : "none" }}
          width="100%"
          height="100%"
          src={src}
          title={title}
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          frameBorder="0"
          webkitallowfullscreen="true"
          mozallowfullscreen="true"
          allowFullScreen
        />
      </div>
    </div>
  )
}

Video.defaultProps = {
  src: "https://www.youtube.com/embed/videoseries?autoplay=1&controls=0&showinfo=0&loop=1&rel=0&listType=playlist&list=PLzc14R1Ecr9CummAOR3Dm9z3CT2iJ07WC",
  title: "Alex TV playlist",
}

export default Video
