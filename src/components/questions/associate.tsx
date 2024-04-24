import {
    Data
} from "@/lib/type/type"
export const associate: Data = {
    question: "Possedez-vous des associés ?",
    answers: {
        type: "multiple_choice",
        name: "",
        inputOption: {
            label: "",
            type: ""
        },
        choiceOptions: [
            {
                label: "Non",
                value: "no",
                nextQuestion: ""
            },
            {
                label: "Oui, des entreprises",
                value: "yes_company",
                nextQuestion: ""
            },
            {
                label: "Oui, des individus",
                value: "yes_individual",
                nextQuestion: ""
            }
        ]
    },
    nextQuestion: ""
}


/* {
    "question": " Avez-vous des associés ?",
    "answers": {
        "type": "multiple_choice",
        "name": [],
        "choiceOption": [
            {
                "label": "Non",
                "value": "no",
                "nextQuestion": ""
            },
            {
                "label": "Oui, des entreprises",
                "value": "yes_company",
                "nextQuestion": ""
            },
            {
                "label": "Oui, des individus",
                "value": "yes_individual",
                "nextQuestion": ""
            }
        ]
    },
    "nextQuestion": ""
} */