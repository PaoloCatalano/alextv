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
  } = useGlobalContext()

  function handleNumeroCanale() {
    setNumeroCanale(() => {
      if (numeroCanale >= 99) {
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

  return (
    <div className="buttons">
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
