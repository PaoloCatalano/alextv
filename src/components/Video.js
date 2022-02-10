import React from "react"
import { useGlobalContext } from "../context/context"

const Video = ({ src, title, ...props }) => {
  const { touchable, numeroCanale, loading, autoplay } = useGlobalContext()
  return (
    <div
      className={` ${
        autoplay
          ? "iframeVideoWrapper iframeVideoWrapper-resize"
          : "iframeVideoWrapper"
      }`}
    >
      <div className="video">
        <p
          style={{
            position: "absolute",
            right: "0.5rem",
            top: "-54px",
            color: "var(--green)",
            fontSize: "3rem",
            zIndex: 99999,
            fontWeight: 700,
            textShadow: "2px 2px 1.5px var(--grey-1000)",
          }}
        >
          {numeroCanale}
        </p>
        {loading ? (
          <div className="screen resize">
            <div className="video-placeholder fuzzy" />
          </div>
        ) : (
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
        )}
      </div>
    </div>
  )
}

Video.defaultProps = {
  src: "https://www.youtube.com/embed/videoseries?autoplay=1&controls=0&showinfo=0&loop=1&rel=0&listType=playlist&list=PLzc14R1Ecr9CummAOR3Dm9z3CT2iJ07WC",
  title: "Alex TV playlist",
}

export default Video
