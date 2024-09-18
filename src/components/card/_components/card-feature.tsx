import React from "react"
import { CookieIcon, Crosshair2Icon } from "@radix-ui/react-icons"

interface CardFeatureProps {
  name: string
  city: string
}
const CardFeature = ({ name, city }: CardFeatureProps) => {
  return (
    <div className="flex items-center justify-between gap-1 text-[#FF692E]">
      <div className="flex line-clamp-1 items-center gap-1">
        <CookieIcon />
        <div className="text-[13px]">{name}</div>
      </div>
      <div className="flex items-center gap-1">
        <Crosshair2Icon className="text-gray-500" />
        <div className="text-[13px] text-gray-500 capitalize">{city}</div>
      </div>
    </div>
  )
}

export default CardFeature
