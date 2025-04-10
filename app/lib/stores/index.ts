import { generateUniqueString } from "./utils";
import store from "storejs";

const KEY_TASKS = "tasks";

export type Task = {
    id: string;
    title: string;
    description?: string;
    completed: boolean;
    color?: string;
    dueDate?: string;
};

/**
 * Ensures the task store exists in local storage. If it doesn't, initializes it as an empty array.
 */
function ensureTaskStoreExists(): void {
    if (!store.has(KEY_TASKS)) {
        store.set(KEY_TASKS, []);
    }
}

/**
 * Retrieves all tasks from the store.
 * @returns {Task[]} An array of tasks.
 */
export function getTasks(): Task[] {
    ensureTaskStoreExists();
    return store.get(KEY_TASKS) as Task[];
}

/**
 * Adds new tasks to the store. Accepts either a single task or an array of tasks.
 * @param tasks - A single task or an array of tasks to add.
 */
export function addTasks(tasks: Task | Task[]): void {
    const currentTasks = getTasks();
    const newTasks = Array.isArray(tasks) ? tasks : [tasks];
    store.set(KEY_TASKS, [...currentTasks, ...newTasks]);
}

/**
 * Retrieves a task by its unique ID.
 * @param id - The ID of the task to retrieve.
 * @returns {Task | undefined} The task with the specified ID, or undefined if not found.
 */
export function getTask(id: string): Task | undefined {
    const tasks = getTasks();
    return tasks.find((task) => task.id === id);
}

/**
 * Creates a new task, assigns it a unique ID, and adds it to the store.
 * @param task - The task data (excluding the ID).
 * @returns {Task} The newly created task with its unique ID.
 */
export function createTask(task: Omit<Task, "id">): Task {
    const newTask: Task = {
        id: generateUniqueString(),
        ...task,
    };
    addTasks(newTask);
    return newTask;
}

/**
 * Updates an existing task in the store by merging the provided updates with the existing task.
 * If the task with the specified ID does not exist, no changes are made.
 * 
 * @param id - The unique ID of the task to update.
 * @param updatedTask - An object containing the fields to update. Only the provided fields will be updated.
 * @throws {Error} If the task with the specified ID is not found.
 */
export function updateTask(id: string, updatedTask: Partial<Task>): void {
    const tasks = getTasks();
    const taskIndex = tasks.findIndex((task) => task.id === id);

    if (taskIndex === -1) {
        throw new Error(`Task with ID "${id}" not found.`);
    }

    const updatedTaskData = { ...tasks[taskIndex], ...updatedTask };
    tasks[taskIndex] = updatedTaskData;
    store.set(KEY_TASKS, tasks);
}