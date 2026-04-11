"use client"

import { Menu } from "lucide-react"
import "./header.scss"

const Header = () => {
  return (
    <header className="fixed top-0 left-0 z-50 w-full">
      <div className="container mx-auto flex h-16 w-full items-center justify-between">
        <div className="brand">
          <span>THE</span>
          <span>PORTFLiX</span>
        </div>
        <div className="nav_menu">
          <Menu />
        </div>
      </div>
    </header>
  )
}

export default Header
