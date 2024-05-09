import {
    Data
} from "@/lib/type/type"

export const Encaissable: Data = {
    id: 'encaissable',
    question: "Quel est le prix de vos encaissables ?",
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
    nextQuestion: ""
}