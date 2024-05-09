import {
    Data
} from "@/lib/type/type"
export const builtProperties: Data = {
    id: 'builtProperties',
    info:"infoBuiltProperties",
    question: "Entrez la valeur locative de ces biens",
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