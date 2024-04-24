import { Data } from "@/lib/type/type"
export const entry: Data = {
    question: "Etes-vous un Particulier ou une Entreprise ?",
    answers: {
        type: "unique_choice",
        name: "",
        inputOption: {
            label: "",
            type: ""
        },
        choiceOptions: [
            {
                label: "Particulier",
                value: "individual",
                nextQuestion: "plot"
            },
            {
                label: "Entreprise",
                value: "company",
                nextQuestion: "associate"
            }
        ]
    },
    nextQuestion: ""
}








/* {
    "question": "Etes-vous un Particulier ou une Entreprise ?",
    "answers": {
        "type": "unique_choice",
        "name": "",
        "choiceOptions": [
            {
                "label": "Particulier",
                "value": "individual",
                "nextQuestion": "plot"
            },
            {
                "label": "Entreprise",
                "value": "company",
                "nextQuestion": "associate"
            }
        ]
    },
    "nextQuestion": ""
} */