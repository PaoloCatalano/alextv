import React from "react"
import { useGlobalContext } from "../context/context"
import { FaPowerOff } from "react-icons/fa"
import { IoIosArrowDropupCircle } from "react-icons/io"
import { MdTouchApp } from "react-icons/md"

export default function Button({ searchChannels }) {
  const {
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
  } = useGlobalContext()

  function handleNumeroCanale() {
    setNumeroCanale(() => {
      if (numeroCanale >= 9) {
        return 1
      } else {
        return numeroCanale + 1
      }
    })
  }
  function cambiandoCanale() {
    setCambioCanale(true)
    setTimeout(() => {
      setCambioCanale(false)
    }, 3000)
  }
  function modalHidden() {
    setModalTouch(true)
    setTimeout(() => {
      setModalTouch(false)
    }, 2000)
  }

  return (
    <div className="buttons">
      <div className={modaltouch ? "modal-touch" : "modal-touch hidden"}>
        <span> Touch Screen {touchable ? "ON" : "OFF"}</span>
      </div>
      <button onClick={() => setautoplay(!autoplay)}>
        <FaPowerOff style={{ color: autoplay ? "var(--blue-logo)" : "red" }} />
      </button>
      <button
        disabled={!autoplay || cambioCanale}
        onClick={() => {
          cambiandoCanale()
          searchChannels()
          setNumeroCanale(handleNumeroCanale)
        }}
      >
        <IoIosArrowDropupCircle
          style={{
            color:
              autoplay && !cambioCanale
                ? "var(--blue-logo)"
                : "var(--black-logo)",
          }}
        />
      </button>
      <button
        disabled={!autoplay}
        onClick={() => {
          setTouchable(!touchable)

          modalHidden()
        }}
      >
        <MdTouchApp
          style={{
            color:
              touchable && autoplay ? "var(--blue-logo)" : "var(--black-logo)",
          }}
        />{" "}
        <span>{}</span>
      </button>
    </div>
  )
}
