import {
    Data
} from "@/lib/type/type"

export const liter: Data = {
    id: 'liter',
    info:"",
    question: "Entrez le nombre de litres vendus",
    answers: {
        type: "input",
        name: "",
        inputOption: {
            label: "en litre",
            type: "text",
            condition: "",
            alert:"",
            conditionValue: 0,
            nextQuestion:""
        },
        choiceOptions: [
            {   name: "",
                label: "",
                value: "",
                nextQuestion: ""
            }
        ]
    },
    nextQuestion: ""
}