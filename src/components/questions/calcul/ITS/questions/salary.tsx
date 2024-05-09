import {
    Data
} from "@/lib/type/type"

export const salary: Data = {
    id: 'salary',
    info:"infoSalary",
    question: "Entrez la base d'imposition (appuyez sur le bouton info pour en savoir plus)",
    answers: {
        type: "input",
        name: "",
        inputOption: {
            label: "en Fcfa",
            type: "text",
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