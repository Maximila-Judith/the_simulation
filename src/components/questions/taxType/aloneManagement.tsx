import { Data } from "@/lib/type/type"
export const aloneManagement: Data = {
    id: 'aloneManagement',
    question: "Gérez-vous seul votre activité (sans partager le bénéfice avec quelqu'un d'autre) ?",
    answers: {
        type: "unique_choice",
        name: "",
        inputOption: {
            label: "",
            type: "",
            nextQuestion: ""
        },
        choiceOptions: [
            {    name: "",
                label: "Oui",
                value: "yes",
                nextQuestion: "amount"
            },
            {    name: "IS",
                label: "Oui, je dirige une entreprise enregistrée en tant que société (SARL, SA, SAS, etc.) ",
                value: "company",
                nextQuestion: ""
            },
            {    name: "",
                label: "Oui, je fais certains business ayant rapport avec l'immobilier (terrains, maisons, boutiques, usines, etc.)",
                value: "yesRealEstate",
                nextQuestion: "realEstateRole"
            },
            {   name: "",
                label: "non",
                value: "no",
                nextQuestion: "workingSituation"
            }
        ]
    },
    nextQuestion: ""
}

