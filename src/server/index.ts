import { publicProcedure, router } from "./trpc"

export const appRouter = router({
  getRestaurants: publicProcedure.query(async () => {
    return ["hahahaha", "hahaa", "gfgb"]
  }),
})

export type Approuter = typeof appRouter
