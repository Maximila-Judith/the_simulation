import {
    Data
} from "@/lib/type/type"
export const Ca: Data = {
    id: 'entryCalcul',
    info:"",
    question: "Quel est votre chiffre d'affaire de l'année dernière ?",
    answers: {
        type: "input",
        name: "",
        inputOption: {
            label: "en Fcfa",
            type: "text",
            condition: "less",
            alert:"Le montant que vous entrez est supérieur à 50millions",
            conditionValue: 50000001,
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