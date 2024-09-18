import ButtonFavorite from "@/components/buttons/button-favorite"
import CarouselImage from "@/components/carousel/carousel-image"
import React from "react"

interface CardImageProps {
  images: string[]
  isFavorite: boolean
  id: string
}
const CardImage = ({ images, isFavorite, id }: CardImageProps) => {
  return (
    <div className="relative">
      <CarouselImage
        images={images}
        imageClassName="h-[200px] rounded-lg"
        carouselClassName={"h-[200px]"}
      />
      <ButtonFavorite
        wrapperClassName="absolute right-0 top-0 m-2"
        defaultFavorite={isFavorite}
        id={id}
      />
    </div>
  )
}

export default CardImage
