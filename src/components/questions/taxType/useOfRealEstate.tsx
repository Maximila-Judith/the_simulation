import { Data } from "@/lib/type/type"
export const useOfRealEstate: Data = {
    id: 'useOfRealEstate',
    question: "Quel est le montant approximatif de votre chiffre d'affaires annuel ? ",
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
                label: "Oui ",
                value: "yes",
                nextQuestion: "expensiveRealEstateLocation"
            },
            {
                label: "Non, c'est uniquement pour y habiter ",
                value: "no",
                nextQuestion: "notExpensiveRealEstateLocation"
            }
        ]
    },
    nextQuestion: ""
}

