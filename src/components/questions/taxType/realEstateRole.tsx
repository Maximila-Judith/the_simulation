import { Data } from "@/lib/type/type"
export const realEstateRole: Data = {
    id: 'realEstateRole',
    info:"",
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
            {   name : "",
                label: "Je suis propriétaire et je loue ces biens immobiliers aux gens",
                value: "location",
                nextQuestion: "useOfRealEstate"
            },
            {   name : "IBA",
                label: "J'aide les gens à acheter ou à vendre des biens immobiliers",
                value: "intermediate",
                nextQuestion: ""
            },
            {   name : "IBA",
                label: "J'achète des immeubles dans le but de les revendre",
                value: "resell",
                nextQuestion: ""
            },
            {   name : "IBA",
                label: "Je partage/divise des terrains pour qu'ils soient vendus après",
                value: "subdivision",
                nextQuestion: ""
            }
        ]
    },
    nextQuestion: ""
}

