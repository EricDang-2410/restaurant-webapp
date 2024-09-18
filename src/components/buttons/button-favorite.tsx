import { HeartIcon } from "@radix-ui/react-icons"
import clsx from "clsx"
import React from "react"

interface ButtonFavoriteProps {
  wrapperClassName?: React.ComponentProps<"div">["className"]
}

const ButtonFavorite = ({ wrapperClassName }: ButtonFavoriteProps) => {
  return (
    <div className={clsx("p-2 rounded-[50%] backdrop-blur-sm cursor-pointer", wrapperClassName)}>
      <HeartIcon className="h-5 w-5 text-white" />
    </div>
  )
}

export default ButtonFavorite
