import {
    Data
} from "@/lib/type/type"

export const cashable: Data = {
    id: 'cashable',
    info:"infoCashable",
    question: "Entrez la valeur des produts encaissables de votre société",
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