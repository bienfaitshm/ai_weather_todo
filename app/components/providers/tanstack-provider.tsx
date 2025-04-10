"use client";
import type { PropsWithChildren } from "react";
import {
    QueryClient,
    QueryClientProvider as QCProvider,
} from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

/**
 * Creates a new instance of `QueryClient` with customized default options for queries and mutations.
 * 
 * - **Queries Configuration**:
 *   - `refetchOnWindowFocus`: Disabled to prevent automatic refetching when the window regains focus.
 *   - `retry`: Set to `0` to disable automatic retries on query failure.
 *   - `staleTime`: Configured to `5 minutes` (300,000 milliseconds), meaning data will be considered fresh for this duration.
 * 
 * - **Mutations Configuration**:
 *   - `networkMode`: Set to `"always"`, ensuring mutations are always attempted regardless of network conditions.
 * 
 * This configuration is ideal for applications where:
 * - Frequent refetching on window focus is unnecessary.
 * - Query failures should not automatically retry.
 * - Data freshness is critical for a specific duration.
 * - Mutations should proceed even in offline scenarios.
 * 
 * @see https://tanstack.com/query/v4/docs/react/reference/QueryClient for more details on `QueryClient` configuration.
 */
export const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            refetchOnWindowFocus: false,
            retry: 0,
            staleTime: 1000 * 60 * 5, // 5 minutes
        },
        mutations: {
            networkMode: "always",
        },

    },
});


export default function QueryClientProvider({ children }: PropsWithChildren) {
    return (
        <QCProvider client={queryClient}>
            {children}
            <ReactQueryDevtools initialIsOpen={false} />
        </QCProvider>
    );
}