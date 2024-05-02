import { Data } from "@/lib/type/type"
export const realEstateStatus: Data = {
    id: 'realEstateStatus',
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
                label: "Oui ",
                value: "yes",
                nextQuestion: "realEstateLocation"
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

