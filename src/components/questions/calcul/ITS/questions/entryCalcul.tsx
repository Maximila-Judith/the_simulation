import {
    Data
} from "@/lib/type/type"
export const entryCalcul: Data = {
    id: 'entryCalcul',
    info:"infoMonthOfSalary",
    question: "L'impôt à payer varie en fonction du mois, pour quel mois de salaire voulez-vous déterminer l'impôt ?",
    answers: {
        type: "unique_choice",
        name: "",
        inputOption: {
            label: "",
            type: "",
            nextQuestion:""
        },
        choiceOptions: [
            {   name: "",
                label: "Mars",
                value: "march",
                nextQuestion: "salary"
            },

            {  name: "",
            label: "Juin",
            value: "june",
            nextQuestion: "salary"
            },
            {   name: "",
            label: "Autre",
            value: "other",
            nextQuestion: "salary"
            }
        ]
    },
    nextQuestion: ""
}