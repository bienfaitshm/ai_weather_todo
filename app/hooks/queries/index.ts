import { useQuery, useMutation } from "@tanstack/react-query";
import * as taskApi from "@/lib/stores";
import { queryClient } from "@/components/providers/tanstack-provider";

/**
 * Custom hook to fetch all tasks.
 * 
 * @returns Query object containing the tasks data and query state.
 */
export const useGetTasks = () => {
    return useQuery({
        queryKey: ["tasks"], // Unique key for caching and invalidation
        queryFn: taskApi.getTasks, // Fetch function to retrieve tasks
    });
};

/**
 * Custom hook to fetch a single task by its ID.
 * 
 * @param id - The ID of the task to fetch.
 * @returns Query object containing the task data and query state.
 */
export const useGetTask = (id: string) => {
    return useQuery({
        queryKey: ["task", id], // Unique key for caching and invalidation
        queryFn: () => taskApi.getTask(id), // Fetch function to retrieve the task
        enabled: !!id, // Ensures the query only runs if an ID is provided
    });
};

/**
 * Custom hook to create a new task.
 * 
 * @returns Mutation object for creating a task, including mutation state and methods.
 */
export const useCreateTask = () => {
    return useMutation({
        mutationFn: async (task: Omit<taskApi.Task,"id">) => taskApi.createTask(task), // Function to create a task
        onSuccess: () => {
            // Invalidate and refetch the tasks query to reflect the new task
            queryClient.invalidateQueries({ queryKey: ["tasks"] });
        },
    });
};

/**
 * Custom hook to update an existing task.
 * 
 * @returns Mutation object for updating a task, including mutation state and methods.
 */
export const useUpdateTask = () => {
    return useMutation({
        mutationFn: async (task: taskApi.Task) => taskApi.updateTask(task.id, task), // Function to update a task
        onSuccess: () => {
            // Invalidate and refetch the tasks query to reflect the updated task
            queryClient.invalidateQueries({ queryKey: ["tasks"] });
        },
    });
};


/**
 * Custom hook to delete a task by its ID.
 * 
 * @returns Mutation object for deleting a task, including mutation state and methods.
 */
export const useDeleteTask = () => {
    return useMutation({
        mutationFn: async (id: string) => taskApi.deleteTask(id), // Function to delete a task
        onSuccess: () => {
            // Invalidate and refetch the tasks query to reflect the deletion
            queryClient.invalidateQueries({ queryKey: ["tasks"] });
        },
    });
}

/**
 * Toogle task completed state
 * @param id - The ID of the task to toggle.
 */
export const useToggleTaskCompleted = () => {
    return useMutation({
        mutationFn: async (id: string) => taskApi.toggleTaskCompleted(id), // Function to toggle task completed state
        onSuccess: () => {
            // Invalidate and refetch the tasks query to reflect the updated state
            queryClient.invalidateQueries({ queryKey: ["tasks"] });
        },
    });
};