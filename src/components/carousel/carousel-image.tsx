import clsx from "clsx"
import Image from "next/image"
import React from "react"
import { Carousel } from "react-responsive-carousel"

interface CarouselImageProps {
  images: string[]
  imageClassName?: React.ComponentProps<"div">["className"]
  carouselClassName?: React.ComponentProps<"div">["className"]
}

const CarouselImage = ({ images, imageClassName, carouselClassName }: CarouselImageProps) => {
  return (
    <Carousel className={carouselClassName} showStatus={false} showArrows={false} swipeable={true}>
      {(images || []).map((image, idx) => (
        <Image
          src={image}
          key={`${image}_${idx}`}
          width={500}
          height={500}
          className={clsx("object-cover w-full", imageClassName)}
          alt="carousel_image_item"
        />
      ))}
    </Carousel>
  )
}

export default CarouselImage
