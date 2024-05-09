import { Data } from "@/lib/type/type"
export const realEstateStatus: Data = {
    id: 'realEstateStatus',
    question: "Avez-vous des biens immobiliers ? (maisons, terrains, etc.) ",
    answers: {
        type: "unique_choice",
        name: "",
        inputOption: {
            label: "",
            type: "",
            nextQuestion: ""
        },
        choiceOptions: [
            {   name: "",
                label: "Oui ",
                value: "yes",
                nextQuestion: "realEstateLocation"
            },
            {   name: "",
                label: "Non ",
                value: "no",
                nextQuestion: ""
            }
        ]
    },
    nextQuestion: ""
}

