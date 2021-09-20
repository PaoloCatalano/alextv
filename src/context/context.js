import React, { createContext, useContext } from "react"

const Context = createContext()

const Provider = ({ children }) => {
  const [videos, setVideos] = React.useState(["ciao"])
  const [videosIdList, setVideosIdList] = React.useState("")
  const [autoplay, setautoplay] = React.useState(0)
  const [cambioCanale, setCambioCanale] = React.useState(false)
  const [numeroCanale, setNumeroCanale] = React.useState(1)
  const [touchable, setTouchable] = React.useState(true)
  const [modaltouch, setModalTouch] = React.useState(false)

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
// const { videos,
//         setVideos,
//         videosIdList,
//         setVideosIdList,
//         autoplay,
//         setautoplay,
//         cambioCanale,
//         setCambioCanale,
//         numeroCanale,
//         setNumeroCanale,
//         touchable,
//         setTouchable } = useGlobalContext()

export { Context, Provider }
