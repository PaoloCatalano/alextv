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

//https://www.youtube.com/embed/?listType=playlist&autoplay=1&loop=1&playlist=M7lc1UVf-VE&color=white

//good
/*
https://www.youtube.com/embed/videoseries?autoplay=1&controls=0&showinfo=0&modestbranding=0&loop=1&rel=0&iv_load_policy=3&enablejsapi=1&listType=playlist&list=PLzc14R1Ecr9CummAOR3Dm9z3CT2iJ07WC
*/

/* 
https://developers.google.com/youtube/player_parameters?hl=it
https://developers.google.com/youtube/youtube_player_demo
*/
//"No filter selected. Expected one of: id, playlistId"

//BAD req
//kycd-EPfZ2E,JJTRnUZdR-Q,

/* 
apiKey: "AIzaSyDvuN5ZzVJxRoXaH-CA9PwrfDQQaRsY9lQ",
        channelId: "UCaRW_DIcp4n3iDDlvx002dQ",
*/
//
