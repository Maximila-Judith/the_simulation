// Composant React pour mettre à jour les résultats par email
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

interface UpdateData {
    email: string;
    result: Result;
}

const updateUserResult = async (updateData: UpdateData): Promise<void> => {
    try {
        const response = await fetch('/api/updateUserResult', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(updateData),
        });

        if (!response.ok) {
            const errorData = await response.json();
            throw new Error(errorData.error || 'Failed to update result');
        }
    } catch (error) {
        console.error('Erreur lors de la mise à jour des résultats:', error);
        throw new Error('Failed to update result');
    }
};

const UpdateResult = () => {
    const [email, setEmail] = useState<string>('');
    const [result, setResult] = useState<Result>({
        tax_name: '',
        tax_base: '',
        amount: '',
        rate: '',
        minimum: 0,
        price_add: 0,
        tax_price: '', // Assurez-vous d'ajouter ce champ
    });

    const handleUpdateResult = async () => {
        try {
            await updateUserResult({ email, result });
        } catch (error) {
            console.error('Erreur lors de la mise à jour des résultats:', error);
        }
    };

    return (
        <div>
            <h1>Update Result</h1>
            <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter Email"
            />
            {/* Ajoutez des inputs pour chaque champ de result */}
            <button onClick={handleUpdateResult}>Update Result</button>
        </div>
    );
};

export default UpdateResult;
