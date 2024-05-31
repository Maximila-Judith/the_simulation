// /pages/api/sendResultCode.ts
import { NextApiRequest, NextApiResponse } from 'next';
import { PrismaClient } from '@prisma/client';
import nodemailer from 'nodemailer';

const prisma = new PrismaClient();

const transporter = nodemailer.createTransport({
    service: 'your-email-service', // par exemple, 'gmail'
    auth: {
        user: 'your-email@example.com',
        pass: 'your-email-password'
    }
});

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'POST') {
        const { userId, email } = req.body;

        try {
            // Vérifier si l'utilisateur existe avec l'ID fourni
            const user = await prisma.user.findUnique({
                where: { id: userId },
            });

            if (!user) {
                return res.status(404).json({ error: 'User not found' });
            }

            // Configurer les détails de l'email
            const mailOptions = {
                from: 'your-email@example.com',
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