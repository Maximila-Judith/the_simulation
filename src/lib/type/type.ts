export interface Data {
    id: string;
    info: string;
    question: string;

    answers: {
        type: string;
        name: string;
        inputOption: {
            label: string;
            type: string;
            nextQuestion: string
        };
        choiceOptions: {  name: string; label: string; value: string; nextQuestion: string }[]
    };
    nextQuestion: string 
}

export interface Info {
    id: string;
    title : string;
    values: {title: string, 
        description: string
    }[]
}
