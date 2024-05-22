import {
    Data
} from "@/lib/type/type"
export const Ca: Data = {
    id: 'entryCalcul',
    question: "Quel est votre chiffre d'affaire de l'année dernière ?",
    answers: {
        type: "input",
        name: "",
        inputOption: {
            label: "en Fcfa",
            type: "text",
             regex: "",
            messageRegex: "",
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
    nextQuestion: "encaissable"
}