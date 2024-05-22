import {
    Data
} from "@/lib/type/type"
export const minimumCheck: Data = {
    id: 'minimumCheck',
    info:"",
    question: "Dans quel cas êtes-vous ?",
    answers: {
        type: "unique_choice",
        name: "",
        inputOption: {
            label: "",
            type: "",
            condition: "",
            alert:"",
            conditionValue: 0,
            nextQuestion:""
        },
        choiceOptions: [
            {   name: "",
                label: "sociétés à prépondérance immobilière",
                value: "realEstateCompany",
                nextQuestion: "cashable"
            },
            {  name: "",
            label: "stations-services",
            value: "station",
            nextQuestion: "station"
            },

            {  name: "",
            label: "entreprises du secteur du bâtiment et des travaux publics",
            value: "btp",
            nextQuestion: "cashable"
            },
            {   name: "",
            label: "Autre",
            value: "other",
            nextQuestion: "cashable"
            }
        ]
    },
    nextQuestion: ""
}