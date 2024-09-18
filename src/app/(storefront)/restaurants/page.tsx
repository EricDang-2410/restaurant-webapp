"use client"

import { trpc } from "@/lib/fetcher-core/client"
import React from "react"
import RestaurantList from "./components/restaurant-list"

const RestaurantsPage = () => {
  const restaurants = trpc.getRestaurants.useQuery()

  console.log("restaurants", restaurants?.data)
  return (
    <div className="w-full h-full px-8 py-10">
      <RestaurantList data={restaurants?.data} />
    </div>
  )
}

export default RestaurantsPage
