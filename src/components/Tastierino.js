import React from "react"
import { useGlobalContext } from "../context/context"

export default function Tastierino() {
  const {
    autoplay,
    cambioCanale,
    cambiandoCanale,
    setNumeroCanale,
    searchChannels,
    setLoading,
  } = useGlobalContext()

  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9]

  return (
    <div className="tastierino">
      {numbers.map((number, index) => {
        return (
          <button
            style={{
              color: cambioCanale || !autoplay ? "grey" : "var(--yellow-logo)",
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
              setLoading(true)
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
