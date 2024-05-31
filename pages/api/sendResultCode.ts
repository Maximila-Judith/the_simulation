// /pages/api/sendResultCode.ts
import { NextApiRequest, NextApiResponse } from 'next';
import { PrismaClient } from '@prisma/client';
import nodemailer from 'nodemailer';

const prisma = new PrismaClient();

const transporter = nodemailer.createTransport({
    service: 'your-email-service', // par exemple, 'gmail'
    auth: {
        user: 'emmanuelsrgbelgos@gmail.com',
        pass: ''
    }
});

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'POST') {
        const { email } = req.body;

        try {
            // Rechercher l'utilisateur par email
            const user = await prisma.user.findUnique({
                where: { email },
            });

            if (!user) {
                return res.status(404).json({ error: 'User not found' });
            }

            const userId = user.id;

            const mailOptions = {
                from: 'emmanuelsrgbelgos@gmail.com',
                to: email,
                subject: 'Your User ID',
                text: `Your user ID is ${userId}. Use this ID to retrieve your results.`
            };

            // Envoyer l'email
            await transporter.sendMail(mailOptions);

            res.status(200).json({ message: 'User ID sent successfully' });
        } catch (error) {
            console.error('Error sending user ID:', error);
            res.status(500).json({ error: 'Failed to send user ID' });
        }
    } else {
        res.status(405).json({ error: 'Method not allowed' });
    }
}
