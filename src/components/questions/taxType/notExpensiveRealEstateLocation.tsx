import { Data } from "@/lib/type/type"
export const notExpensiveRealEstateLocation: Data = {
    id: 'notExpensiveRealEstateLocation',
    question: "Ces biens immobiliers sont-ils situés au Bénin ?  ",
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
                value: "IRF & TFU",
                nextQuestion: ""
            },
            {
                label: "Non, c'est uniquement pour y habiter ",
                value: "IRF",
                nextQuestion: ""
            }
        ]
    },
    nextQuestion: ""
}

