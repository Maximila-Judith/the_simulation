import {
    Data
} from "@/lib/type/type"
export const realEstateExpensesPrice: Data = {
    id: 'realEstateExpensesPrice',
    info:"",
    question: "Entrez le montant total de ces dépenses",
    answers: {
        type: "input",
        name: "",
        inputOption: {
            label: "en Fcfa",
            type: "text",
            condition: "",
            alert:"",
            conditionValue: 0,
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
    nextQuestion: "landlordsExpenses"
}