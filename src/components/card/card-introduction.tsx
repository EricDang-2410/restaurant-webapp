import clsx from "clsx"
import Image from "next/image"
import Link from "next/link"
import React from "react"

interface CardIntroductionProps {
  imageUrl: string
  link: string
  text: string
}

const CardIntroduction = ({ imageUrl, link, text }: CardIntroductionProps) => {
  return (
    <div className="h-[500px] relative">
      <Image
        src={imageUrl}
        key={`${imageUrl}`}
        width={500}
        height={500}
        className={clsx("object-cover rounded-md h-[500px]")}
        alt="image_introduction _item"
      />
      <div className="absolute bottom-0 left-0 w-full bg-[#20272F] p-5 rounded-br-md rounded-bl-md">
        <div>
          <div className="text-primary text-[16px]">{text}</div>
          <Link href={link} className="text-white hover:underline text-[13px]">
            Learn more
          </Link>
        </div>
      </div>
    </div>
  )
}

export default CardIntroduction
