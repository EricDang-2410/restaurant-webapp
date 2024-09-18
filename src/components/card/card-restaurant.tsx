import React from "react"
import CardTitle from "./_components/card-title"
import CardFeature from "./_components/card-feature"
import CardCategory from "./_components/card-category"
import CardImage from "./_components/card-images"
interface CardRestaurantProps {
  imageUrl: string[]
  name: string
  city: string
  description: string
  rating: number
  ratingCount: number
  featureText: string
  category: string
  priceRange: string
}
const CardRestaurant = ({
  imageUrl,
  name,
  city,
  rating,
  ratingCount,
  featureText,
  description,
  category,
  priceRange,
}: CardRestaurantProps) => {
  return (
    <div className="h-full w-full">
      <CardImage images={imageUrl} />
      <div className="py-3">
        <CardFeature name={featureText} city={city} />
        <CardTitle title={name} rating={rating} ratingCount={ratingCount} />
        <div className="text-[14px] text-[#475467] line-clamp-1">{description}</div>
        <CardCategory category={category} priceRange={priceRange} />
      </div>
    </div>
  )
}

export default CardRestaurant
