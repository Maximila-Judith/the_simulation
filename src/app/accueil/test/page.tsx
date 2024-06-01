'use client'

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import { Save } from 'lucide-react'
import { Label } from "@/components/ui/label";
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

const CreateNewUser = () => {
    const [userId, setUserId] = useState<number | null>(null);

    const handleCreateUser = async () => {
        try {
            const newUser = await createUserWithResult({
                email: 'johndoe@bels.com',
                name: 'John Doe',
                result: {
                    tax_name: 'Example Tax',
                    tax_base: 'edees',
                    amount: '20',
                    rate: '0.2',
                    minimum: 10,
                    price_add: 5,
                    tax_price: '20', // Assurez-vous d'ajouter ce champ
                },
            });
            setUserId(newUser.id);
        } catch (error) {
            console.error('Erreur lors de la création de l\'utilisateur:', error);
        }
    };

    return (
        <div>
            <h1>Create User</h1>
            <button onClick={handleCreateUser}>Create User</button>
            {userId && <p>User ID: {userId}</p>}
        </div>
    );
};

export default CreateNewUser;