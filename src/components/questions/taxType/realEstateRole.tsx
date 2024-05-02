import { Data } from "@/lib/type/type"
export const realEstateRole: Data = {
    id: 'realEstateRole',
    question: "Que faites-vous précisément ?  ",
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
                label: "Je suis propriétaire et je loue ces biens immobiliers aux gens ",
                value: "yes",
                nextQuestion: "useOfRealEstate"
            },
            {
                label: "J'agis en tant qu'intermédiaire pour l'achat ou la vente d'immeubles ?  ",
                value: "IBA",
                nextQuestion: ""
            },
            {
                label: "J'achète des immeubles dans le but de les revendre   ",
                value: "IBA",
                nextQuestion: ""
            },
            {
                label: "Je procède au partage/division de terrains en vue de leur vente  ",
                value: "IBA",
                nextQuestion: ""
            }
        ]
    },
    nextQuestion: ""
}

