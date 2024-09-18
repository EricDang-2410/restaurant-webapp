import { textByStoreCategory } from "@/constants/category"
import React from "react"

interface CardCategoryProps {
  category: string
  priceRange: string
}

const CardCategory = ({ category, priceRange }: CardCategoryProps) => {
  return (
    <div className="flex items-center gap-2 text-[14px] text-[#475467]">
      <div className="line-clamp-1">{textByStoreCategory[category]}</div>
      <div> · </div>
      <div>{priceRange} 만원</div>
    </div>
  )
}

export default CardCategory
