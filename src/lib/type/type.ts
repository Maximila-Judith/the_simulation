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
            condition: string;
            conditionValue: number;
            alert: string;
            nextQuestion: string
        };
        choiceOptions: { name: string; label: string; value: string; nextQuestion: string }[]
    };
    nextQuestion: string
}

export interface Info {
    id: string;
    title: string;
    values: {
        title: string,
        description: string
    }[]
}
export interface Htax {
    id: string;
    description: string;
    values: {
        title: string,
        description: string
    }[]
}

export interface ResultInterface {
    taxName: string[],
    taxBase: string[],
    amount: Number[],
    rate: Number[],
    minimum: Number,
    priceAdd: Number,
    taxPrice: Number[],
    exoneration: string
}

interface Result {
    id?: number; // id est facultatif car il sera généré par la base de données
    tax_name: string;
    tax_base: number;
    amount: number;
    rate: number;
    minimum: number;
    price_add: number;
}

interface UserData {
    email: string;
    name: string;
    result: Result;
}
