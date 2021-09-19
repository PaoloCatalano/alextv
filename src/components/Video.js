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
  src: "https://www.youtube.com/embed/-3_Q2v8ckN0",
  title: "Alex TV playlist",
}

export default Video
