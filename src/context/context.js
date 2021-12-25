import React, { createContext, useContext } from "react"
import axios from "axios"

const Context = createContext()

const Provider = ({ children }) => {
  const [videos, setVideos] = React.useState(["AlexTV"])
  const [videosIdList, setVideosIdList] = React.useState("")
  const [autoplay, setautoplay] = React.useState(0)
  const [cambioCanale, setCambioCanale] = React.useState(false)
  const [numeroCanale, setNumeroCanale] = React.useState(1)
  const [touchable, setTouchable] = React.useState(true)
  const [modaltouch, setModalTouch] = React.useState(false)
  const [loading, setLoading] = React.useState(null)

  async function searchChannels() {
    try {
      const { data } = await axios.get(`../api/getPlaylist`, {
        headers: {
          channel: numeroCanale,
        },
      })
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
      console.log("There is an error: " + error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <Context.Provider
      value={{
        videos,
        setVideos,
        videosIdList,
        setVideosIdList,
        autoplay,
        setautoplay,
        cambioCanale,
        setCambioCanale,
        numeroCanale,
        setNumeroCanale,
        touchable,
        setTouchable,
        modaltouch,
        setModalTouch,
        searchChannels,
        loading,
        setLoading,
      }}
    >
      {children}
    </Context.Provider>
  )
}

export const useGlobalContext = () => {
  return useContext(Context)
}
// import { useGlobalContext } from '../context/context'
// const { videos, setTouchable } = useGlobalContext()

export { Context, Provider }
