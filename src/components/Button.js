import React from "react"
import { useGlobalContext } from "../context/context"
import { FaPowerOff } from "react-icons/fa"
import { MdTouchApp } from "react-icons/md"
import Tastierino from "./Tastierino"

export default function Button() {
  const {
    autoplay,
    setautoplay,
    touchable,
    setTouchable,
    modaltouch,
    setModalTouch,
    cambiandoCanale,
    cambioCanale,
  } = useGlobalContext()

  function modalHidden() {
    setModalTouch(true)
    setTimeout(() => {
      setModalTouch(false)
    }, 2000)
  }

  return (
    <div className="buttons">
      <div className="led-box">
        <div
          className={cambioCanale ? "led-red led-blink-effect " : "led-red"}
        />
      </div>
      <div className={modaltouch ? "modal-touch" : "modal-touch hidden"}>
        <span> Touch Screen {touchable ? "ON" : "OFF"}</span>
      </div>
      <div className="on-touch">
        <button
          onClick={() => {
            setautoplay(!autoplay)

            cambiandoCanale()
          }}
        >
          <FaPowerOff
            style={{
              color: autoplay ? "var(--blue-logo)" : "var(--red)",
              transform: "translate(1px,4px)",
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
              color: !autoplay
                ? "var(--black-logo)"
                : touchable && autoplay
                ? "var(--yellow-logo)"
                : "var(--blue-logo)",
            }}
          />{" "}
        </button>
      </div>
      <Tastierino />
    </div>
  )
}
