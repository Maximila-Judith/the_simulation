import { Data } from "@/lib/type/type"
export const aloneManagement: Data = {
    id: 'aloneManagement',
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
                nextQuestion: "amount"
            },
            {
                label: "Oui, je dirige une entreprise enregistrée en tant que société (SARL, SA, SAS, etc.) ",
                value: "IS",
                nextQuestion: ""
            },
            {
                label: "Oui, je fais certains business ayant rapport avec l'immobilier (terrains, maisons, boutiques, usines, etc.)",
                value: "yesRealEstateStatus",
                nextQuestion: "realEstateRole"
            },
            {
                label: "non",
                value: "yesCompany",
                nextQuestion: "workingSituation"
            }
        ]
    },
    nextQuestion: ""
}

