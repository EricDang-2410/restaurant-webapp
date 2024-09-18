import { StarFilledIcon } from "@radix-ui/react-icons"
import React from "react"

interface CardTitleProps {
  title: string
  rating: number
  ratingCount: number
}

const CardTitle = ({ title, rating, ratingCount }: CardTitleProps) => {
  return (
    <div className="flex justify-between gap-3">
      <div className="text-[16px] font-bold line-clamp-1">{title}</div>
      <div className="flex gap-1 items-center">
        <StarFilledIcon className="h-4 w-4 text-yellow-300" />
        <div>{rating}</div>
        <div>({ratingCount})</div>
      </div>
    </div>
  )
}

export default CardTitle
