// /pages/api/createOrUpdateUserWithResult.ts
import { NextApiRequest, NextApiResponse } from 'next';
import { PrismaClient } from '@prisma/client';
import crypto from 'crypto';
import nodemailer from 'nodemailer';

const prisma = new PrismaClient();

// Configurer Nodemailer
const transporter = nodemailer.createTransport({
    service: 'gmail', // Vous pouvez utiliser un autre service comme SendGrid, Mailgun, etc.
    auth: {
        user: process.env.EMAIL_USER, // Votre adresse email
        pass: process.env.EMAIL_PASS, // Votre mot de passe ou token d'application
    },
});

async function sendEmail(email: string, code: string) {
    const mailOptions = {
        from: process.env.EMAIL_USER,
        to: email,
        subject: 'Votre code de simulation',
        text: `Voici votre code de simulation : ${code}`,
    };

    try {
        await transporter.sendMail(mailOptions);
        console.log('Email envoyé avec succès');
    } catch (error) {
        console.error('Erreur lors de l\'envoi de l\'email:', error);
        throw new Error('Failed to send email');
    }
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'POST') {
        const { email, name, result } = req.body;

        try {
            // Vérifier si l'utilisateur existe déjà
            const existingUser = await prisma.user.findUnique({
                where: { email },
                include: { results: true },
            });

            let resultCode;
            if (existingUser) {
                // Si l'utilisateur existe, mettre à jour le résultat
                resultCode = existingUser.result_code;
                await prisma.result.update({
                    where: { userId: existingUser.id },
                    data: {
                        tax_name: result.tax_name,
                        tax_base: result.tax_base,
                        amount: result.amount,
                        rate: result.rate,
                        minimum: result.minimum,
                        price_add: result.price_add,
                        tax_price: result.tax_price,
                    },
                });
            } else {
                // Sinon, créer un nouvel utilisateur et un nouveau résultat avec un code unique
                resultCode = crypto.randomBytes(3).toString('hex').toUpperCase();
                await prisma.user.create({
                    data: {
                        email,
                        name,
                        result_code: resultCode,
                        results: {
                            create: {
                                tax_name: result.tax_name,
                                tax_base: result.tax_base,
                                amount: result.amount,
                                rate: result.rate,
                                minimum: result.minimum,
                                price_add: result.price_add,
                                tax_price: result.tax_price,
                                code: resultCode,
                            },
                        },
                    },
                });

                // Envoyer le code par email au nouvel utilisateur
                await sendEmail(email, resultCode);
            }

            // Renvoie un message de succès
            res.status(201).json({ message: 'User and result handled successfully' });
        } catch (error) {
            console.error('Erreur lors de la création ou de la mise à jour de l\'utilisateur:', error);
            res.status(500).json({ error: 'Failed to handle user and result' });
        }
    } else {
        res.status(405).json({ error: 'Method not allowed' });
    }
}
