import { NextApiRequest, NextApiResponse } from 'next';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'POST') {
        const { email, name, result } = req.body;

        try {
            // Ajout de journalisation
            console.log('Requête reçue:', req.body);

            const newUser = await prisma.user.create({
                data: {
                    email,
                    name,
                    result: {
                        create: result
                    }
                },
                include: {
                    result: true
                }
            });
            console.log('Utilisateur créé:', newUser);
            res.status(201).json(newUser);
        } catch (error) {
            // Ajout de journalisation de l'erreur
            console.error('Erreur lors de la création de l\'utilisateur:', error);
            res.status(500).json({ error: 'Failed to create user' });
        }
    } else {
        res.status(405).json({ error: 'Method not allowed' });
    }
}
