import { Restaurant } from "@prisma/client"
import { publicProcedure, router } from "./trpc"
import { prisma } from "@/lib/prisma"
import * as z from "zod"

export const appRouter = router({
  getRestaurants: publicProcedure.query(async () => {
    const restauants: Restaurant[] = await prisma.restaurant.findMany({
      orderBy: [
        {
          name: "desc",
        },
      ],
    })

    return restauants
  }),

  getFavoriteRestaurants: publicProcedure.query(async () => {
    const restauants: Restaurant[] = await prisma.restaurant.findMany({
      where: {
        isFavorite: true,
      },
    })
    return restauants
  }),

  updateFavorites: publicProcedure
    .input(
      z.object({
        id: z.string(),
        isFavorite: z.boolean(),
      }),
    )
    .mutation(async ({ input }) => {
      await prisma.restaurant.update({
        data: {
          isFavorite: input.isFavorite,
        },
        where: {
          id: input.id,
        },
      })

      if (input.isFavorite) return "Add to favorites successfully !"
      return "Remove to favorites successfully !"
    }),
})

export type Approuter = typeof appRouter
