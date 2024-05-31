import {
    Data
} from "@/lib/type/type"
export const entryCalcul: Data = {
    id: 'entryCalcul',
    info: "infoCompany",
    question: "Quel genre de société êtes-vous ?",
    answers: {
        type: "unique_choice",
        name: "",
        inputOption: {
            label: "",
            type: "",
            condition: "",
            alert: "",
            conditionValue: 0,
            nextQuestion: ""
        },
        choiceOptions: [
            {
                name: "",
                label: "Ecoles privées d'enseignement scolaire, universitaire, technique et professionnel.",
                value: "school",
                nextQuestion: "profit"
            },
            {
                name: "",
                label: "Autre",
                value: "other",
                nextQuestion: "otherProfit"
            }
        ]
    },
    nextQuestion: ""
}