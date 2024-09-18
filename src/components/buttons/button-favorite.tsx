import { trpc } from "@/lib/fetcher-core/client"
import { HeartFilledIcon, HeartIcon } from "@radix-ui/react-icons"
import clsx from "clsx"
import React, { useState } from "react"
import toast from "react-hot-toast"

interface ButtonFavoriteProps {
  wrapperClassName?: React.ComponentProps<"div">["className"]
  defaultFavorite: boolean
  id: string
}

const ButtonFavorite = ({ wrapperClassName, defaultFavorite, id }: ButtonFavoriteProps) => {
  const [isFavorite, setIsFavorite] = useState(defaultFavorite)

  const { mutate } = trpc.updateFavorites.useMutation()
  const utils = trpc.useUtils()
  const toggleFavorite = () => {
    setIsFavorite(!isFavorite)
    mutate(
      {
        id: id,
        isFavorite: !isFavorite,
      },
      {
        onSuccess: (res) => {
          toast.success(res, { position: "top-center" })
          utils.getRestaurants.invalidate()
          utils.getFavoriteRestaurants.invalidate()
        },
        onError: (error) => {
          console.log("error", error)
          toast(error.message, { position: "top-center" })
        },
      },
    )
  }
  return (
    <div
      className={clsx("p-2 rounded-[50%] backdrop-blur-sm cursor-pointer", wrapperClassName)}
      onClick={toggleFavorite}
    >
      {isFavorite ? (
        <HeartFilledIcon className="h-5 w-5 text-white" />
      ) : (
        <HeartIcon className="h-5 w-5 text-white" />
      )}
    </div>
  )
}

export default ButtonFavorite
