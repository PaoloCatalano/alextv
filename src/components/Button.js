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
  } = useGlobalContext()

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
      <div className="on-touch">
        <button onClick={() => setautoplay(!autoplay)}>
          <FaPowerOff
            style={{ color: autoplay ? "var(--blue-logo)" : "red" }}
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
                touchable && autoplay
                  ? "var(--blue-logo)"
                  : "var(--black-logo)",
            }}
          />{" "}
        </button>
      </div>
      <Tastierino />
    </div>
  )
}
