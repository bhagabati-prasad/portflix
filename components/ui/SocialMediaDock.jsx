"use client"

import { Github, Instagram, Linkedin } from "@hugeicons/core-free-icons"
import IconBox from "./IconBox"

const SocialMediaDock = () => {
  const socialIcons = [
    {
      icon: Instagram,
      label: "Instagram",
      clickFn: () => alert("Instagram!"),
    },
    {
      icon: Github,
      label: "GitHub",
      clickFn: () => alert("Github!"),
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      clickFn: () => alert("LinkedIn!"),
    },
  ]

  return (
    <>
      {socialIcons.map((item, index) => (
        <IconBox key={index} item={item} index={index} />
      ))}
    </>
  )
}

export default SocialMediaDock
