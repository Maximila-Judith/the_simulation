// /pages/api/createUser.ts
import { NextApiRequest, NextApiResponse } from 'next';
import { PrismaClient } from '@prisma/client';
import crypto from 'crypto';

const prisma = new PrismaClient();

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
   
    if (req.method === 'POST') {
        const { email, name, result_code} = req.body;

        try {
            // Générer un code unique pour le résultat
            const resultCode = crypto.randomBytes(3).toString('hex').toUpperCase();

            // Créer un nouvel utilisateur et un résultat associé avec le code unique
            const newUser = await prisma.user.create({
                data: {
                    email,
                    name,
                result_code,
                },
                include: {
                    result: true,
                },
            });

            // Envoyer le code à l'utilisateur (retourner la réponse)
            res.status(201).json({ newUser, result_code });
        } catch (error) {
            console.error('Erreur lors de la création de l\'utilisateur:', error);
            res.status(500).json({ error: 'Failed to create user' });
        }
    } else {
        res.status(405).json({ error: 'Method not allowed' });
    }
}
