import React from "react"

interface HomeBannerProps {
  image: string
}

const HomeBanner = ({ image }: HomeBannerProps) => {
  return (
    <div
      style={{ backgroundImage: `url(${image})` }}
      className="h-screen w-full bg-fixed brightness-[30%]"
    ></div>
  )
}

export default HomeBanner
