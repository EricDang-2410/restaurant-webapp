import { Approuter } from "@/server"
import { createTRPCReact } from "@trpc/react-query"

export const trpc = createTRPCReact<Approuter>({})
