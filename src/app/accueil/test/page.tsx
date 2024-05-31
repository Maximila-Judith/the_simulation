'use client'
import React from 'react';

interface Result {
    id?: number; // id est facultatif car il sera généré par la base de données
    tax_name: string;
    tax_base: string;
    amount: string;
    rate: string;
    minimum: number;
    price_add: number;
}
interface UserData {
    email: string;
    name: string;
    result: Result;
}

const createUser = async (userData: UserData): Promise<UserData> => {
    try {
        const response = await fetch('/api/createUser', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(userData),
        });

        if (!response.ok) {
            const errorData = await response.json();
            throw new Error(errorData.error || 'Failed to create user');
        }

        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Erreur lors de la création de l\'utilisateur:', error);
        throw new Error('Failed to create user');
    }
};

// Utilisation de la fonction createUser
const createNewUser = async () => {
    try {
        const newUser = await createUser({
            email: 'john.doe@belgos.com',
            name: 'John Doe',
            result: {
                tax_name: 'Example Tax',
                tax_base: '100',
                amount: '20',
                rate: '0.2',
                minimum: 10,
                price_add: 5,
            },
        });
        console.log('Nouvel utilisateur créé:', newUser);
    } catch (error) {
        console.error('Erreur lors de la création de l\'utilisateur:', error); // Imprimez l'erreur réelle ici
    }
};

const TestPage = () => {
    return (
        <div>
            <h1>Test Page</h1>
            <button onClick={createNewUser}>Create User</button>
        </div>
    );
};

export default TestPage;
