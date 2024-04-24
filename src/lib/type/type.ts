export interface Data {
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