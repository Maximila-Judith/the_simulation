import {
    Data
} from "@/lib/type/type"
export const level: Data = {
    id: 'level',
    question: "Entrez vos revenus",
    answers: {
        type: "input",
        name: "",
        inputOption: {
            label: "Montant",
            type: "text"
             regex: "",
            messageRegex: "",
        },
        choiceOptions: [
            {
                label: "",
                value: "",
                nextQuestion: ""
            },
            {
                label: "",
                value: "",
                nextQuestion: ""
            },
            {
                label: "",
                value: "",
                nextQuestion: ""
            }
        ]
    },
    nextQuestion: ""
}
