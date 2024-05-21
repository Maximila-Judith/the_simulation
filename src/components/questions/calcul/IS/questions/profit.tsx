import {
    Data
} from "@/lib/type/type"

export const profit: Data = {
    id: 'profit',
    info:"infoProfit",
    question: "Entrez le bénéfice encaissable de votre société",
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
    nextQuestion: "cashable"
}