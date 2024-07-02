// /pages/api/createUserWithResult.ts
import { NextApiRequest, NextApiResponse } from 'next';
import { PrismaClient } from '@prisma/client';
import crypto from 'crypto';

const prisma = new PrismaClient();

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'POST') {
        const { email, name, result } = req.body;
        const resultCode = crypto.randomBytes(3).toString('hex').toUpperCase();
        try {
            const newUser = await prisma.user.create({
                data: {
                    email,
                    name,
                    result_code:resultCode,
                    results: {
                        create: {
                            tax_name: result.tax_name,
                            tax_base: result.tax_base,
                            amount: result.amount,
                            rate: result.rate,
                            minimum: result.minimum,
                            price_add: result.price_add,
                            tax_price: result.tax_price,
                            code: resultCode
                        },
                    },
                },
                include: {
                    results: true,
                },
            });

            // Renvoie l'utilisateur avec son ID
            res.status(201).json({ code: resultCode, message: 'User created successfully' });
        } catch (error) {
            console.error('Erreur lors de la création de l\'utilisateur:', error);
            res.status(500).json({ error: 'Failed to create user' });
        }
    } else {
        res.status(405).json({ error: 'Method not allowed' });
    }
}
