import { Data } from "@/lib/type/type"
export const aloneManagement: Data = {
    id: 'aloneManagement',
    info:"",
    question: "Gérez-vous seul votre activité ?(sans partager le bénéfice avec quelqu'un d'autre)",
    answers: {
        type: "unique_choice",
        name: "",
        inputOption: {
            label: "",
            type: "",
            condition: "",
            alert:"",
            conditionValue: 0,
            nextQuestion: ""
        },
        choiceOptions: [
            {    name: "",
                label: "Oui",
                value: "yes",
                nextQuestion: "aloneManagementSituation"
            },
            {   name: "",
                label: "non",
                value: "no",
                nextQuestion: "workingSituation"
            }
        ]
    },
    nextQuestion: ""
}

