import CardRestaurant from "@/components/card/card-restaurant"
import { LoaderIcon } from "lucide-react"
import React from "react"

interface FavoritesListProps {
  data: any
}

const FavoritesList = ({ data }: FavoritesListProps) => {
  return (
    <>
      {!data && (
        <div className="h-screen w-full flex justify-center items-center">
          <LoaderIcon className="animate-spin" />
        </div>
      )}
      <div className="grid grid-cols-4 w=full gap-3">
        {(data || []).map((restaurant: any) => (
          <CardRestaurant
            key={restaurant.id}
            id={restaurant.id}
            imageUrl={restaurant.images}
            name={restaurant.name}
            city={restaurant.city}
            rating={restaurant.rating}
            ratingCount={restaurant.rating_count}
            featureText={restaurant.featured ? JSON.parse(restaurant.featured).text : ""}
            description={restaurant.desc}
            category={restaurant.category}
            priceRange={restaurant.price_range}
            isFavorite={restaurant.isFavorite}
          />
        ))}
      </div>
    </>
  )
}

export default FavoritesList
