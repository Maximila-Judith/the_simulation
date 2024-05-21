import { Data } from "@/lib/type/type"
export const workingSituation: Data = {
    id: 'workingSituation',
    info:"infoRealEstate",
    question: "Avec qui travaillez-vous ? ",
    answers: {
        type: "unique_choice",
        name: "",
        inputOption: {
            label: "",
            type: "",
            condition: "",
            alert:"",
            conditionValue: 0,
            nextQuestion: ""
        },
        choiceOptions: [
            {   name: "ITS",
                label: "Je travaille pour quelqu'un et je reçois un salaire",
                value: "employee",
                nextQuestion: ""
            },
            {   name: "IS",
                label: "J'ai des associés avec qui je partage les bénéfices de l'entreprise",
                value: "associate",
                nextQuestion: ""
            },
            {   name: "",
                label: "Je suis un associé d'une société à prépondérance immobilière",
                value: "realEstateAssociate",
                nextQuestion: "realEstateAssociate"
            }
        ]
    },
    nextQuestion: ""
}

