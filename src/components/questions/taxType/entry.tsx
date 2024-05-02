import { Data } from "@/lib/type/type"
export const entry: Data = {
    id: 'entry',
    question: "Avez-vous une activité/ un business qui vous rapporte de l'argent ? ",
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
                label: "Oui",
                value: "yes",
                nextQuestion: "aloneManagement"
            },
            {
                label: "Non",
                value: "no",
                nextQuestion: "realEstateStatus"
            }
        ]
    },
    nextQuestion: ""
}

