"use client"

import { HugeiconsIcon } from "@hugeicons/react"

const IconBox = ({ item, index }) => {
  return (
    <div
      className="icon_box"
      style={{ "--ic-delay": `0.${index}s` }}
      onClick={item?.clickFn}
    >
      <HugeiconsIcon icon={item?.icon} size={24} color="#fff" />
    </div>
  )
}

export default IconBox
