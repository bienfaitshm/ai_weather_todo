
import { useQuery, useMutation } from "@tanstack/react-query"
import * as taskApi from "@/lib/stores"

export const useGetTasks = () => {
    return useQuery({
        queryKey: ["tasks"],
        queryFn: () => taskApi.getTasks(),
        staleTime: 1000 * 60 * 5, // 5 minutes
    })
}