import { Data } from "@/lib/type/type"
export const workingSituation: Data = {
    id: 'workingSituation',
    question: "Avec qui travaillez-vous ? ",
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
                label: "Je travaille pour quelqu’un et je reçois un salaire  ",
                value: "ITS",
                nextQuestion: ""
            },
            {
                label: "Oui, je possède une entreprise et j’ai des associés avec qui je partage les bénéfices   ",
                value: "IS",
                nextQuestion: ""
            },
            {
                label: "c) Je suis un associé dans une société qui possède principalement des biens immobiliers et qui ne paie pas l'impôt sur les sociétés   ",
                value: "IRF",
                nextQuestion: ""
            }
        ]
    },
    nextQuestion: ""
}

