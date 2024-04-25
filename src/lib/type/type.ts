export interface Data {
    id: string;
    
    question: string;

    answers: {
        type: string;
        name: string;
        inputOption: {
            label: string;
            type: string
        };
        choiceOptions: { label: string; value: string; nextQuestion: string }[]
    };
    nextQuestion: string
}