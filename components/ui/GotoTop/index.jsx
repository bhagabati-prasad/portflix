"use client"

import { ChevronsUp } from "lucide-react"
import "./goto-top.scss"
import { useEffect, useState } from "react"

const GotoTop = () => {
  const [showButton, setShowButton] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowButton(true)
      } else {
        setShowButton(false)
      }
    }

    window.addEventListener("scroll", handleScroll)

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  const handleGoTop = () => {
    if (typeof window != null) {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      })
    }
  }

  return (
    <div
      className={`goto_top ${showButton ? "show_btn" : ""}`}
      onClick={handleGoTop}
    >
      <div className="goto_icon_wrapper">
        <ChevronsUp />
      </div>
    </div>
  )
}

export default GotoTop
