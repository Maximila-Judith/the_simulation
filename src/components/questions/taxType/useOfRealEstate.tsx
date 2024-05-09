import { Data } from "@/lib/type/type"
export const useOfRealEstate: Data = {
    id: 'useOfRealEstate',
    question: "Ces personnes utilisent-elles ces biens pour faire des activités qui leurs font gagner de l'argent ?",
    answers: {
        type: "unique_choice",
        name: "",
        inputOption: {
            label: "",
            type: "",
            nextQuestion: ""
        },
        choiceOptions: [
            {   name: "",
                label: "Oui ",
                value: "yes",
                nextQuestion: "expensiveRealEstateLocation"
            },
            {   name: "",
                label: "Non, c'est uniquement pour y habiter ",
                value: "no",
                nextQuestion: "notExpensiveRealEstateLocation"
            }
        ]
    },
    nextQuestion: ""
}

