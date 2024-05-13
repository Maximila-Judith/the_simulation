import { Data } from "@/lib/type/type"
export const aloneManagementSituation: Data = {

    id: 'aloneManagementSituation',
    info: "infoAloneManagementSituation",
    question: "Dans quel cas êtes-vous ?",
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
                name: "IS",
                label: "Je dirige une entreprise enregistrée en tant que société (SARL,SA,SAS,etc.)",
                value: "company",
                nextQuestion: ""
            },
            {
                name: "",
                label: "Je fais certains business ayant rapport avec l'immobilier (terrains,maisons,etc.)",
                value: "yesRealEstate",
                nextQuestion: "realEstateRole"
            },
            {
                name: "",
                label: "Dans aucun de ces cas",
                value: "none",
                nextQuestion: "amount"
            },
        ]
    },
    nextQuestion: ""
}

