// /pages/api/getResultById.ts
import { NextApiRequest, NextApiResponse } from 'next';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const { id } = req.query;

    try {
        const user = await prisma.user.findUnique({
            where: { id: Number(id) },
            include: { result: true },
        });

        if (!user) {
            return res.status(404).json({ error: 'User not found' });
        }

        res.status(200).json(user);
    } catch (error) {
        console.error('Erreur lors de la récupération du résultat:', error);
        res.status(500).json({ error: 'Failed to fetch result' });
    }
}
