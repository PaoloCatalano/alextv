import React, { useEffect } from "react"
import { useGlobalContext } from "../context/context"
import { FaPowerOff } from "react-icons/fa"
import { MdTouchApp } from "react-icons/md"
import Tastierino from "./Tastierino"
import useAnimation from "../utils/useAnimation"
import useKeyPress from "../utils/useKeyPress"

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

  const animation = useAnimation("elastic", 900, 0)

  const on = useKeyPress("Enter")

  useEffect(() => {
    if (on) {
      setautoplay(!autoplay)
      cambiandoCanale()
    }
  }, [on])

  return (
    <div
      className="buttons"
      style={{
        marginTop: animation * 800 - 800,
      }}
    >
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
