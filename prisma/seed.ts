import { Restaurant } from "@/types/restaurant"
import { prisma } from "../src/lib/prisma"

const jsonPath = "../data/mocking.json"

const seedDatabase = async () => {
  try {
    const data: Restaurant[] = require(jsonPath)

    console.log(`Reading data from ${jsonPath}`)

    for (const restaurantData of data) {
      const restaurant = await prisma.restaurant.create({
        data: {
          id: restaurantData.id,
          category: restaurantData.category,
          city: restaurantData.city,
          desc: restaurantData.desc,
          featured: JSON.stringify(restaurantData.featured),
          name: restaurantData.name,
          price_range: restaurantData.price_range,
          rating: restaurantData.rating,
          rating_count: restaurantData.rating_count,
          images: restaurantData.images,
          isFavorite: restaurantData.isFavorite,
        },
      })

      console.log(`Created ${restaurant.name}`)
    }
  } catch (error) {
    console.log("Error seeding database: ", error)
  }
}

seedDatabase()
  .catch((e) => console.error(e))
  .finally(async () => {
    await prisma.$disconnect()
  })
