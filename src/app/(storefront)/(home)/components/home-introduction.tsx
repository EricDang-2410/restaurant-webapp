import CardIntroduction from "@/components/card/card-introduction"
import { PAGE_URL } from "@/constants/page-url"
import React from "react"

const cards: CardIntroduction[] = [
  {
    imageUrl:
      "https://images.unsplash.com/photo-1541614101331-1a5a3a194e92?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    link: PAGE_URL.RESTAURANTS,
    text: "Restaurants",
  },
  {
    imageUrl:
      "https://images.unsplash.com/photo-1700530799809-bfe8221d0465?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    link: PAGE_URL.FAVORITES,
    text: "Favorites",
  },
]

interface CardIntroduction {
  imageUrl: string
  link: string
  text: string
}

interface HomeIntroductionProps {}
const HomeIntroduction = ({}: HomeIntroductionProps) => {
  return (
    <div className="h-fit w-full py-10 flex flex-col items-center">
      <div className="font-mono text-[26px] text-primary font-bold">Introduction</div>
      <div className="text-[30px] text-black font-extrabold">DEDICATED TO DELIGHT YOU</div>
      <div className="text-[18px] text-gray-400 max-w-[600px] text-center">
        Providing an exceptional dining experience, focusing on delicious food and attentive service
        that brings joy and satisfaction to every guest
      </div>
      <div className="flex py-7 px-4 gap-4">
        {(cards || []).map((card, idx) => (
          <CardIntroduction
            key={`${card.imageUrl}_${idx}`}
            imageUrl={card.imageUrl}
            link={card.link}
            text={card.text}
          />
        ))}
      </div>
    </div>
  )
}

export default HomeIntroduction
