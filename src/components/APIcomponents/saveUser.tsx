// Composant React pour enregistrer les résultats et récupérer l'ID
'use client'
import React, { useState } from 'react';

interface Result {
    tax_name: string;
    tax_base: string;
    amount: string;
    rate: string;
    minimum: number;
    price_add: number;
    tax_price: string; // Assurez-vous d'ajouter ce champ
}

interface UserData {
    email: string;
    name: string;
    result: Result;
}

const createUserWithResult = async (userData: UserData): Promise<{ id: number }> => {
    try {
        const response = await fetch('/api/createUserWithResult', {
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

const CreateNewUser = ( userdata :UserData) => {
    const [userId, setUserId] = useState<number | null>();
    const [message, setMessage] = useState("")

    const handleCreateUser = async () => {
        try {
            const newUser = await createUserWithResult({
                email: userdata.email,
                name: userdata.name,
                result: {
                    tax_name: userdata.result.tax_name,
                    tax_base: userdata.result.tax_base,
                    amount: userdata.result.amount,
                    rate: userdata.result.rate,
                    minimum: userdata.result.minimum,
                    price_add: userdata.result.price_add,
                    tax_price: userdata.result.tax_price,
                },
            });
            setUserId(newUser.id);
            setMessage('votre code de vérification est '+userId )
        } catch (error) {

           setMessage('Erreur lors de la création de l\'utilisateur');
        }
    };
    handleCreateUser();

    return message
};

export default CreateNewUser;
