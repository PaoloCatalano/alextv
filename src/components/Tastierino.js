import React, { useEffect } from "react"
import { useGlobalContext } from "../context/context"
import useKeyPress from "../utils/useKeyPress"

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

  const uno = useKeyPress("1")
  const due = useKeyPress("2")
  const tre = useKeyPress("3")
  const qua = useKeyPress("4")
  const cin = useKeyPress("5")
  const sei = useKeyPress("6")
  const set = useKeyPress("7")
  const ott = useKeyPress("8")
  const nov = useKeyPress("9")

  const telecomando = () => {
    setLoading(true)
    cambiandoCanale()
    searchChannels()
  }

  useEffect(() => {
    if (uno) {
      setNumeroCanale(1)
      telecomando()
    }
    if (due) {
      setNumeroCanale(2)
      telecomando()
    }
    if (tre) {
      setNumeroCanale(3)
      telecomando()
    }
    if (qua) {
      setNumeroCanale(4)
      telecomando()
    }
    if (cin) {
      setNumeroCanale(5)
      telecomando()
    }
    if (sei) {
      setNumeroCanale(6)
      telecomando()
    }
    if (set) {
      setNumeroCanale(7)
      telecomando()
    }
    if (ott) {
      setNumeroCanale(8)
      telecomando()
    }
    if (nov) {
      setNumeroCanale(9)
      telecomando()
    }
  }, [setNumeroCanale, cin, due, nov, ott, qua, sei, set, tre, uno])

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
              telecomando()
            }}
          >
            {number}
          </button>
        )
      })}
    </div>
  )
}
