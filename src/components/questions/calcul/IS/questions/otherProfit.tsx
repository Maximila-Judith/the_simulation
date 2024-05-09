import {
    Data
} from "@/lib/type/type"

export const otherProfit: Data = {
    id: 'otherProfit',
    info:"infoProfit",
    question: "Entrez le bénéfice encaissable de votre société",
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
    nextQuestion: "minimumCheck"
}