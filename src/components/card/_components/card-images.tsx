import ButtonFavorite from "@/components/buttons/button-favorite"
import CarouselImage from "@/components/carousel/carousel-image"
import React from "react"

interface CardImageProps {
  images: string[]
}
const CardImage = ({ images }: CardImageProps) => {
  return (
    <div className="relative">
      <CarouselImage
        images={images}
        imageClassName="h-[200px] rounded-lg"
        carouselClassName={"h-[200px]"}
      />
      <ButtonFavorite wrapperClassName="absolute right-0 top-0 m-2" />
    </div>
  )
}

export default CardImage
