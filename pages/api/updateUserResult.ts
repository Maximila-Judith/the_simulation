import { NextApiRequest, NextApiResponse } from 'next';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'POST') {
        const { email, result } = req.body;

        try {
            const existingUser = await prisma.user.findUnique({
                where: { email },
                include: { result: true }
            });

            if (!existingUser) {
                return res.status(404).json({ error: 'User not found' });
            }

            // Vérifier si existingUser.result est défini
            if (!existingUser.result) {
                return res.status(404).json({ error: 'Result not found for this user' });
            }

            const updatedResult = await prisma.result.update({
                where: { id: existingUser.result.id },
                data: result
            });

            res.status(200).json(updatedResult);
        } catch (error) {
            if (error instanceof Error) {
                res.status(500).json({ error: error.message });
            } else {
                // Gérer d'autres types d'erreurs
                res.status(500).json({ error: 'An unknown error occurred' });
            }
        }
    } else {
        res.status(405).json({ error: 'Method not allowed' });
    }
}