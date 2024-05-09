import {
    Data
} from "@/lib/type/type"

export const undevelopedProperties: Data = {
    id: 'undevelopedProperties',
    info:"infoUndevelopedProperties",
    question: "Entrez la valeur de l'évaluation administrative pour votre propriété ?",
    answers: {
        type: "input",
        name: "",
        inputOption: {
            label: "en  fcfa",
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