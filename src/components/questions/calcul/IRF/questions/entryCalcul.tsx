import {
    Data
} from "@/lib/type/type"

export const entryCalcul: Data = {
    id: 'entryCalcul',
    info:"",
    question: "Quel est le montant total que vous recevez pour la location de tous vos biens immobilers ?",
    answers: {
        type: "input",
        name: "",
        inputOption: {
            label: "en Fcfa",
            type: "text",
            nextQuestion:""
        },
        choiceOptions: [
            {   name: "",
                label: "",
                value: "",
                nextQuestion: ""
            }
        ]
    },
    nextQuestion: "realEstateExpenses"
}