import {
    Data
} from "@/lib/type/type"
export const landlordsExpensesPrice: Data = {
    id: 'landlordsExpensesPrice',
    info:"",
    question: "Entrez le montant total de ces dépenses",
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
    nextQuestion: ""
}