import { Restaurant } from "@prisma/client"
import { publicProcedure, router } from "./trpc"
import { prisma } from "@/lib/prisma"

export const appRouter = router({
  getRestaurants: publicProcedure.query(async () => {
    const restauants: Restaurant[] = await prisma.restaurant.findMany()

    return restauants
  }),
})

export type Approuter = typeof appRouter
