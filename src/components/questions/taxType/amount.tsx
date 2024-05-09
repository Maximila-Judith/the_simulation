import { Data } from "@/lib/type/type"
export const amount: Data = {
    id: 'amount',
    question: "Quel est le montant approximatif de votre chiffre d'affaires annuel ? ",
    answers: {
        type: "unique_choice",
        name: "",
        inputOption: {
            label: "",
            type: "",
            nextQuestion: ""
        },
        choiceOptions: [
            {   name: "TPS",
                label: "50 millions de francs CFA ou moins ",
                value: "more",
                nextQuestion: ""
            },
            {   name: "IBA",
                label: "Plus de 50 millions de francs CFA ",
                value: "less",
                nextQuestion: ""
            }
        ]
    },
    nextQuestion: ""
}

