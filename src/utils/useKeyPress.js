import { useState, useEffect } from "react"

export default function useKeyPress(targetKey) {
  const isBrowser = typeof window !== "undefined"

  // State for keeping track of whether key is pressed
  const [keyPressed, setKeyPressed] = useState(false)
  // If pressed key is our target key then set to true
  function downHandler({ key }) {
    if (key === targetKey) {
      setKeyPressed(true)
    }
  }
  // If released key is our target key then set to false
  const upHandler = ({ key }) => {
    if (key === targetKey) {
      setKeyPressed(false)
    }
  }
  // Add event listeners
  useEffect(() => {
    if (isBrowser) {
      window.addEventListener("keydown", downHandler)
      window.addEventListener("keyup", upHandler)
    }
    // Remove event listeners on cleanup
    return () => {
      if (isBrowser) {
        window.removeEventListener("keydown", downHandler)
        window.removeEventListener("keyup", upHandler)
      }
    }
    //eslint-disable-next-line
  }, []) // Empty array ensures that effect is only run on mount and unmount
  return keyPressed
}
