<p align="center">
  <h1 align="center">Restaurant Demo</h1>
  <p align="center">
    ✨ <a href="https://restaurant-webapp-kappa.vercel.app/">https://restaurant-webapp-kappa.vercel.app/</a> ✨
    <br/>
    Web application with NextJs and Trpc and Prisma
  </p>
</p>
<br/>
<br/>

## Introduction

My web application is built using Next.js version `14.0.4`, a powerful and versatile framework that simplifies the development process with its many features and benefits. On the backend, we utilize tRPC for seamless API communication, and Prisma as my ORM and database management tool, ensuring efficient and structured handling of data

## Installation

### Requirements

- TypeScript 4.5+!
- You must enable `strict` mode in your `tsconfig.json`. This is a best practice for all TypeScript projects.

  ```ts
  // tsconfig.json
  {
    // ...
    "compilerOptions": {
      // ...
      "strict": true
    }
  }
  ```

### From `yarn` with NextJs (Node/Bun)

```sh
yarn create next-app          # yarn
```

### From `yarn` with Trpc (Node/Bun)

```sh
yarn add @trpc/server @trpc/client @tanstack/react-query        # yarn
```

- With `@trpc/server` used for config Server
- With `@trpc/client @tanstack/react-query` used for config client and query in Client

### From `yarn` with Prisma (Node/Bun)

```sh
yarn add prisma --save-dev        # yarn
```

## Trpc integration

### Create minimal server

`server/trpc`

```sh
import { initTRPC } from "@trpc/server"

const t = initTRPC.create()

export const router = t.router
export const publicProcedure = t.procedure

```

`server/client`

```sh
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
})

export type Approuter = typeof appRouter
```

Example with the end point api getRestaurants that created in server with query call

### Create minimal client

`fetch-core/client`

```sh
import { Approuter } from "@/server"
import { createTRPCReact } from "@trpc/react-query"

export const trpc = createTRPCReact<Approuter>({})
```

Because the trpc client is required the variable to work globally.

`fetch-core/provider`

```sh
"use client"

import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { httpBatchLink } from "@trpc/client"
import React, { useState } from "react"
import { trpc } from "./client"

export function Provider({ children }: { children: React.ReactNode }) {
  const [queryClient] = useState(() => new QueryClient())
  const [trpcClient] = useState(() =>
    trpc.createClient({
      links: [
        httpBatchLink({
          url: process.env.BACKEND_URL ?? "",
        }),
      ],
    }),
  )

  return (
    <trpc.Provider client={trpcClient} queryClient={queryClient}>
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </trpc.Provider>
  )
}
```

## Prisma integration

### Create schema

`prisma/schema.prisma`

```sh

datasource db {
  provider = "postgresql"
  url = env("POSTGRES_PRISMA_URL") // uses connection pooling
  directUrl = env("POSTGRES_URL_NON_POOLING") // uses a direct connection
}

generator client {
  provider = "prisma-client-js"
}

model Restaurant {
  id            String      @default(cuid()) @id
  desc          String
  rating        Float
  rating_count  Float
  category      String
  city          String
  images        String[]
  name          String
  price_range   String
  featured      Json
  isFavorite    Boolean     @default(false)
}



```

To actually create the tables in your database, you now can use the following command of the Prisma CLI

```sh
npx prisma db push
```
