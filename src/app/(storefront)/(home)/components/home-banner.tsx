import React from "react"

interface HomeBannerProps {
  image: string
}

const HomeBanner = ({ image }: HomeBannerProps) => {
  return (
    <div className="relative h-screen w-full">
      <div
        style={{ backgroundImage: `url(${image})` }}
        className="h-full w-full bg-fixed brightness-[30%]"
      ></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <div className="flex flex-col items-center justify-center gap-2">
          <div className="font-mono text-[26px] text-primary">Welcome</div>
          <div className="text-[45px] text-white">RESTAURANT</div>
          <div className="w-full bg-primary h-3 rounded-lg max-w-[200px]" />
          <div className="text-[22px] text-white">We are always here to serve you.</div>
        </div>
      </div>
    </div>
  )
}

export default HomeBanner
