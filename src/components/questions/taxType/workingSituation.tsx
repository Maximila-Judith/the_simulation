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
            {   name: "ITS",
                label: "Je travaille pour quelqu'un et je reçois un salaire",
                value: "employee",
                nextQuestion: ""
            },
            {   name: "IS",
                label: "Je possède une entreprise et j'ai des associés avec qui je partage les bénéfices",
                value: "associate",
                nextQuestion: ""
            },
            {   name: "IRF",
                label: "Je suis un associé dans une société qui possède des biens immobiliers et qui ne paie pas l'impôt sur les sociétés",
                value: "realEstateAssociate",
                nextQuestion: ""
            }
        ]
    },
    nextQuestion: ""
}

