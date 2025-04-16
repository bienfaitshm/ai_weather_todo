import axios from "axios"

const baseURL = process.env.AI_API_URL ||  "https://openrouter.ai/api/v1/"
const API_KEY = process.env.AI_API_KEY
const AI_MODEL = "mistralai/mistral-nemo:free"

const axiosClient = axios.create({baseURL, headers:{
    Authorization: `Bearer ${API_KEY}`
} });

type Message = {
    role:"user"| "assistant";
    content:string;
}

type ParamsType = {
    siteName?:string;
    siteUrl?:string;
    messages: Message []
}

type ChoiseReponse = {
    "logprobs": null,
    "finish_reason": string,
    "native_finish_reason": string,
    "index": 0,
    "message": {
        "role": string,
        "content": string,
        "refusal": null | string,
        "reasoning": null | string
    }
}
type Reponse = {
    "id": string,
    "provider": string,
    "model": string,
    "object": string,
    "created": number,
    "choices": ChoiseReponse[],
    "usage": {
        "prompt_tokens": number,
        "completion_tokens": number,
        "total_tokens": number
    }
}
export async function postChatCompletions({messages, siteName, siteUrl}:ParamsType) {
    const response = await axiosClient.post<Reponse>("chat/completions", {
        model: AI_MODEL,
        messages
    }, {headers:{
        "HTTP-Referer" : siteUrl,
        "X-Title":siteName
    }}).then(res=>res.data)
    return response    
}