import React from "react"
import { useGlobalContext } from "../context/context"

export default function Tastierino() {
  const {
    autoplay,
    cambioCanale,
    setCambioCanale,
    setNumeroCanale,
    searchChannels,
  } = useGlobalContext()

  function cambiandoCanale() {
    setCambioCanale(true)
    setTimeout(() => {
      setCambioCanale(false)
    }, 3000)
  }

  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9]

  return (
    <div className="tastierino">
      {numbers.map((number, index) => {
        return (
          <button
            style={{
              color: cambioCanale ? "grey" : "var(--yellow-logo)",
            }}
            key={index}
            disabled={!autoplay || cambioCanale}
            onMouseDown={() => {
              setNumeroCanale(number)
            }}
            onTouchStart={() => {
              setNumeroCanale(number)
            }}
            onKeyDown={() => {
              setNumeroCanale(number)
            }}
            onClick={() => {
              cambiandoCanale()
              searchChannels()
            }}
          >
            {number}
          </button>
        )
      })}
    </div>
  )
}
