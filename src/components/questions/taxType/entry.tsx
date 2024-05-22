import { Data } from "@/lib/type/type"
export const entry: Data = {
    id: 'entry',
    info: "",
    question: "Avez-vous une activité qui vous rapporte de l'argent ? ",
    answers: {
        type: "unique_choice",
        name: "",
        inputOption: {
            label: "",
            type: "",
            condition: "",
            alert:"",
            conditionValue: 0,
            nextQuestion: ""
        },
        choiceOptions: [
            {
                name: "",
                label: "Oui",
                value: "yes",
                nextQuestion: "aloneManagement"
            },
            {
                name: "",
                label: "Non",
                value: "no",
                nextQuestion: "realEstateStatus"
            }
        ]
    },
    nextQuestion: ""
}

