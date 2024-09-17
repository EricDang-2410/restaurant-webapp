export interface Restaurant {
  rating: number
  rating_count: number
  category: string
  city: string
  desc: string
  id: string
  images: string[]
  name: string
  price_range: string
  featured: RestaurantFeatured
  isFavorite: boolean
}

interface RestaurantFeatured {
  text: string
  icon: string
}
