"use client"
import React from 'react'
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
import { ReactNode, useState } from 'react';
import CreateNewUser from "@/components/APIcomponents/saveUser"

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

export const SaveForms = ({data }:{ data: Result }) => {
    
const [nameValue, setNameValue] = useState<string>('');
  const [emailValue, setEmailValue] = useState<string>('');
  const [isNameValid, setIsNameValid] = useState<boolean>(true);
  const [isEmailValid, setIsEmailValid] = useState<boolean>(true);

  const nameRegex = /^[a-zA-ZÀ-ÖØ-öø-ÿ' -]{1,50}$/;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const validateName = (name: string) => nameRegex.test(name);
  const validateEmail = (email: string) => emailRegex.test(email);

  const nameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setNameValue(value);
    setIsNameValid(validateName(value));
  };

  const emailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setEmailValue(value);
    setIsEmailValid(validateEmail(value));
    };
    

    const createUserWithResult = async (userData: UserData): Promise<{ code: string }> => {
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
    
    const [userId, setUserId] = useState<string | null>();
    const [message, setMessage] = useState("")

    const handleCreateUser = async () => {
        try {
            const newUser = await createUserWithResult({
                email: emailValue,
                name: nameValue,
                result: {
                    tax_name: data.tax_name,
                    tax_base: data.tax_base,
                    amount: data.amount,
                    rate: data.rate,
                    minimum: data.minimum,
                    price_add: data.price_add,
                    tax_price: data.tax_price,
                },
            });
            setUserId(newUser.code);
            setMessage('votre code de vérification est ' + userId)
            console.log('votre code de vérification est ' + userId)
        } catch (error) {

            setMessage('Erreur lors de la création de l\'utilisateur');
            console.log('Erreur lors de la création de l\'utilisateur')
        }
    };
    
  
    return (
        <div>
            <AlertDialog>
                <AlertDialogTrigger asChild>
                       <p className=' text-center text-sm hover:text-neutral-400'>Enrégistrer</p> 
                </AlertDialogTrigger>
{ message ? <AlertDialogContent>
                    <AlertDialogHeader>
                    <AlertDialogTitle>Message</AlertDialogTitle>
                       <AlertDialogDescription>
                            {message}
                        </AlertDialogDescription>
                    </AlertDialogHeader>
                    <AlertDialogFooter>
                        <AlertDialogAction>
                          <Button onClick={()=>setMessage("")}>ok</Button>
                        </AlertDialogAction>
                    </AlertDialogFooter>
                </AlertDialogContent>
                :
                <AlertDialogContent>
                    <AlertDialogHeader>
                    <AlertDialogTitle>Insérez vos informations</AlertDialogTitle>
                       <AlertDialogDescription>
                            Remplissez ce formulaire
                        </AlertDialogDescription>
                    </AlertDialogHeader>
                <div className="grid gap-4 py-4">
                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="name" className="text-right">
                        Nom
                        </Label>
                        <Input
                        id="name"
                        value={nameValue}
                        className={`col-span-3 ${!isNameValid ? 'border-red-500' : ''}`}
                        onChange={nameChange}
                        />
                        {!isNameValid && <p className="col-span-4 text-red-500">Nom invalide</p>}
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="email" className="text-right">
                        Email
                        </Label>
                        <Input
                        id="email"
                        value={emailValue}
                        className={`col-span-3 ${!isEmailValid ? 'border-red-500' : ''}`}
                        onChange={emailChange}
                        />
                        {!isEmailValid && <p className="col-span-4 text-red-500">Email invalide</p>}
                    </div>
                    </div>
                    <AlertDialogFooter>
                        <AlertDialogCancel>Cancel</AlertDialogCancel>
                           <Button onClick={handleCreateUser}>Envoyer</Button>
                    </AlertDialogFooter>
                </AlertDialogContent>}

            </AlertDialog>
        </div>
    )
}