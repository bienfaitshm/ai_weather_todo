import { getAITaskDescription } from "@/.server/assistant"
import { ActionFunctionArgs } from "@remix-run/node"

/**
 * Handles the action request to generate a task description using AI.
 * 
 * @param {ActionFunctionArgs} args - The arguments provided by the Remix action function.
 * @returns {Promise<string>} - The generated task description content.
 */
export async function action({ request }: ActionFunctionArgs): Promise<string> {
    // Parse the incoming request body as JSON
    const { title } = await request.json() as { title: string };

    // Generate the task description using the AI assistant
    const description = await getAITaskDescription(title);

    // Return the content of the generated description
    return description.message.content;
}