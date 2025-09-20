import React from "react"

interface PillProps {
  text: string
  color?: string // allows custom background colors
}

const Pill: React.FC<PillProps> = ({ text, color = "bg-blue-500" }) => {
  return (
    <span
      className={`inline-block px-3 py-1 text-sm text-white rounded-full ${color}`}
    >
      {text}
    </span>
  )
}

export default Pill
