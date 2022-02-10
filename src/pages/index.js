import React from "react"
import Layout from "../components/Layout"
import Video from "../components/Video"
import { useGlobalContext } from "../context/context"
import Button from "../components/Button"
import { FaPowerOff } from "react-icons/fa"

export default function Videos() {
  const {
    videos,
    // setVideos,
    // numeroCanale,
    videosIdList,
    setVideosIdList,
    autoplay,
    searchChannels,
  } = useGlobalContext()

  React.useEffect(() => {
    searchChannels()

    // eslint-disable-next-line
  }, [autoplay])

  React.useEffect(() => {
    let tempList = videos
      ?.map(({ videoId }) => {
        return videoId
      })
      .join(",")
    setVideosIdList(tempList)
    // eslint-disable-next-line
  }, [videos])

  const playlistUrl = `https://www.youtube.com/embed/videoseries?autoplay=${autoplay}&controls=0&rel=0&showinfo=0&loop=1&listType=playlist&playlist=${videosIdList}`

  return (
    <Layout>
      <div className={` ${autoplay ? "screen screen-resize" : "screen"}`}>
        {autoplay ? (
          <Video src={playlistUrl} />
        ) : (
          <>
            <div
              className={` ${
                autoplay
                  ? "video-placeholder video-placeholder-resize"
                  : "video-placeholder"
              }`}
            >
              <div className="slogan fixing-text">
                Premi{" "}
                <span>
                  <FaPowerOff />
                </span>{" "}
                o<span> ↵ </span>per viaggiare nel tempo!
              </div>
            </div>
            <div className=" video-placeholder blend"></div>
            <div className="fuzzy stripe"></div>
          </>
        )}
      </div>
      <Button />
    </Layout>
  )
}
