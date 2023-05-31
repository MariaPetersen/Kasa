import { useState, useEffect } from "react"

function useMobile() {
  const [isMobile, setIsMobile] = useState(false)

  function handleResize() {
    if (window.innerWidth < 768) {
      setIsMobile(true)
    } else {
      setIsMobile(false)
    }
  }

  useEffect(() => {
    handleResize()
    window.addEventListener("resize", handleResize)
  })

  return isMobile
}

export default useMobile
