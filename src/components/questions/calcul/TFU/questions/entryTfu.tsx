import {
    Data
} from "@/lib/type/type"

export const entryTfu: Data = {
    id: 'entryTfu',
    info:"infoEntryTfu",
    question: "Quelle catégorie de biens immobiliers possédez-vous ?",
    answers: {
        type: "unique_choice",
        name: "",
        inputOption: {
            label: "",
            type: "",
            condition: "",
            alert:"",
            conditionValue: 0,
            nextQuestion:""
        },
        choiceOptions: [
            {   name: "",
                label: "Les propriétés bâtis",
                value: "builtProperties",
                nextQuestion: "builtProperties"
            },
            {   name: "",
            label: "Les terrains et propriétés non bâties",
            value: "undevelopedProperties",
            nextQuestion: "undevelopedProperties"
        }
        ]
    },
    nextQuestion: ""
}