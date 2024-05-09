import { Data } from "@/lib/type/type"
export const notExpensiveRealEstateLocation: Data = {
    id: 'notExpensiveRealEstateLocation',
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
            {   name: "IRF&TFU",
                label: "Oui ",
                value: "yes",
                nextQuestion: ""
            },
            {   name: "IRF",
                label: "Non",
                value: "no",
                nextQuestion: ""
            }
        ]
    },
    nextQuestion: ""
}

