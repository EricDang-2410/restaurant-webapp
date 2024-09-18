"use client"

import { trpc } from "@/lib/fetcher-core/client"
import React from "react"
import FavoritesList from "./components/favorites-list"

const FavoritesPage = () => {
  const restaurants = trpc.getFavoriteRestaurants.useQuery()

  return (
    <div className="w-full h-full px-8 py-10">
      <div className="text-[30px] text-black font-extrabold pb-5">Favorite Restaurants</div>
      <FavoritesList data={restaurants?.data} />
    </div>
  )
}

export default FavoritesPage
