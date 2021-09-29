import React from "react"
import Layout from "../components/Layout"
import Video from "../components/Video"
import { useGlobalContext } from "../context/context"
import Button from "../components/Button"

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
      <div className="screen">
        {autoplay ? (
          <Video src={playlistUrl} />
        ) : (
          <>
            <div className="video-placeholder">
              <div className="slogan">La TV che rivogliamo!</div>
            </div>
            <div className=" video-placeholder blend"></div>
          </>
        )}
      </div>
      <Button />
    </Layout>
  )
}
