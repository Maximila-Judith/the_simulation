import {
    Data
} from "@/lib/type/type"
export const plot: Data = {
    id: "plot",
    question: "Possedez-vous une parcelle ?",
    answers: {
        type: "unique_choice",
        name: "",
        inputOption: {
            label: "",
            type: ""
        },
        choiceOptions: [
            {
                label: "oui",
                value: "yes",
                nextQuestion: "plot"
            },
            {
                label: "non",
                value: "no",
                nextQuestion: "associate"
            }
        ]
    },
    nextQuestion: ""
}

/* {
    "question": " Possédez-vous une parcelle ?",
    "answers": {
        "type": "unique_choice",
        "name": "",
        "choiceOption": [
            {
                "label": "Oui",
                "value": "yes",
                "nextQuestion": ""
            },
            {
                "label": "Non",
                "value": "no",
                "nextQuestion": "associate"
            }
        ]
    },
    "nextQuestion": ""
} */