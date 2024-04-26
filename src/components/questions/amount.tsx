import {
    Data
} from "@/lib/type/type"
export const rising: Data = {
    id: 'amount',
    question: "Entrez vos revenus",
    answers: {
        type: "input",
        name: "",
        inputOption: {
            label: "Montant",
            type: "text"
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
