import { Data } from "@/lib/type/type"
export const realEstateLocation: Data = {
    id: 'realEstateLocation',
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
            {
                label: "Oui",
                value: "TFU",
                nextQuestion: ""
            },
            {
                label: "Non ",
                value: "no",
                nextQuestion: ""
            }
        ]
    },
    nextQuestion: ""
}

