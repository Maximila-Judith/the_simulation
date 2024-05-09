import {
    Data
} from "@/lib/type/type"
export const station: Data = {
    id: 'station',
    info:"",
    question: "Connaissez-vous le nombre approximatif de litre des produits péroliers vendus ?",
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
                label: "Oui",
                value: "yes",
                nextQuestion: "liter"
            },

            {  name: "",
            label: "Non",
            value: "no",
            nextQuestion: ""
            }
        ]
    },
    nextQuestion: ""
}