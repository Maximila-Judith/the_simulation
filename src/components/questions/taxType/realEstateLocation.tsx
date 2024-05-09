import { Data } from "@/lib/type/type"
export const realEstateLocation: Data = {
    id: 'realEstateLocation',
    question: "Ces biens immobiliers sont-ils situés au Bénin ?",
    answers: {
        type: "unique_choice",
        name: "",
        inputOption: {
            label: "",
            type: "",
            nextQuestion: ""
        },
        choiceOptions: [
            {   name: "TFU",
                label: "Oui",
                value: "yes",
                nextQuestion: ""
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

