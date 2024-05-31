import { NextApiRequest, NextApiResponse } from 'next';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'POST') {
        const { email, name, result } = req.body;

        try {
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
            res.status(201).json(newUser);
        } catch (error) {
            res.status(500).json({ error: 'Failed to create user' });
        }
    } else {
        res.status(405).json({ error: 'Method not allowed' });
    }
}