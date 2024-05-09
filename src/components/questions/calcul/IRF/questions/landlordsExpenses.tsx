import {
    Data
} from "@/lib/type/type"

export const landlordsExpenses: Data = {
    id: 'landlordsExpenses',
    info:"infoLandlordsExpenses",
    question: "Y'a-t-il eu des dépenses normalement supportées par vous mais mises à la charge des locataires ?",
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
                nextQuestion: "landlordsExpensesPrice"
            },
            {   name: "",
                label: "Non",
                value: "no",
                nextQuestion: ""
            }
        ]
    },
    nextQuestion: ""
}