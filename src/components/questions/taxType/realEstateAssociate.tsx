import { Data } from "@/lib/type/type"
export const realEstateAssociate: Data = {
    id: 'realEstateAssociate',
    info:"",
    question: "Cette entreprise paie-t-elle déja l'impôt sur les sociétés ?",
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
                nextQuestion: ""
            },

            {   name: "IRF",
                label: "non",
                value: "no",
                nextQuestion: ""
            }
        ]
    },
    nextQuestion: ""
}

