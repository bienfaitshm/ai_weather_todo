
import { postChatCompletions } from "@/lib/open-router"

export async function getAIAdvice() {
    const advices = await postChatCompletions({
        messages:[
            {role:"user", content:"Bonjour, j'aimerais avoir des conseils sur les tâches que je pourrais faire aujourd'hui/cette semaine en fonction de la météo actuelle et des prévisions à lubumbashi. Pourriez-vous me donner des suggestions pour des activités à l'intérieur et à l'extérieur ?"}
        ]
    })

    console.log(advices.choices[0].message.content)
    return advices.choices[0]
}

export async function getAITaskDescription(title:string) {
    const advices = await postChatCompletions({
        messages:[
            {role:"user", content:`Génère une petite description de la tâche basée sur le titre :${title}`}
        ]
    })
    return advices.choices[0]
}