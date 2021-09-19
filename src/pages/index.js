import React from "react"
import Layout from "../components/Layout"
import Title from "../components/Title"
import Video from "../components/Video"
import axios from "axios"
import { useGlobalContext } from "../context/context"
import Button from "../components/Button"

export default function Videos() {
  const { videos, setVideos, videosIdList, setVideosIdList, autoplay } =
    useGlobalContext()

  async function searchChannels() {
    try {
      const { data } = await axios.get("../api/playlist").then()
      const playlist = data.items
        .filter(({ status }) => status.privacyStatus === "public")
        .sort(() => (Math.random() > 0.5 ? 1 : -1))
        .map(({ snippet }) => {
          return {
            // title: snippet.title,
            videoId: snippet.resourceId.videoId,
          }
        })
      setVideos(playlist)
    } catch (error) {
      console.log("error is: " + error)
    }
  }
  React.useEffect(() => {
    searchChannels()
  }, [autoplay])

  React.useEffect(() => {
    let tempList = videos
      ?.map(({ videoId }) => {
        return videoId
      })
      .join(",")
    setVideosIdList(tempList)
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
      <Button searchChannels={searchChannels} />
    </Layout>
  )
}
