import {
    Data
} from "@/lib/type/type"

export const realEstateExpenses: Data = {
    id: 'realEstateExpenses',
    info:"infoRealEstateExpenses",
    question: "Avez-vous effectué des dépenses pour vos biens immobiliers au cours de l'année dernière ?",
    answers: {
        type: "unique_choice",
        name: "",
        inputOption: {
            label: "",
            type: "",
            nextQuestion:""
        },
        choiceOptions: [
            {   name: "",
                label: "Oui",
                value: "yes",
                nextQuestion: "realEstateExpensesPrice"
            },
            {   name: "",
                label: "Non",
                value: "no",
                nextQuestion: "landlordsExpenses"
            }
        ]
    },
    nextQuestion: ""
}