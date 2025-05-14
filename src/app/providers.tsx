"use client"
import { ReactNode } from "react"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { ReactQueryDevtools } from "@tanstack/react-query-devtools/production"

const queryClient = new QueryClient()

export function Providers({children}: {children: ReactNode}) {
  return (
    <QueryClientProvider client={queryClient}>
      {children}
      <ReactQueryDevtools/>
    </QueryClientProvider>
  )
}