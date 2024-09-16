import { appRouter } from "@/server"
import { fetchRequestHandler } from "@trpc/server/adapters/fetch"

const handler = (req: Request) =>
  fetchRequestHandler({
    endpoint: "/api",
    router: appRouter,
    createContext: () => ({}),
    req,
  })

export { handler as POST, handler as GET }
