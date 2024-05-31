import express from 'express';
import next from 'next';
import { PrismaClient } from '@prisma/client';

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
    const server = express();

    // Créez un nouvel utilisateur dans la base de données
    server.post('/api/users', async (req, res) => {
        const { name, email } = req.body;

        try {
            const prisma = new PrismaClient();

            // Vérifiez si l'utilisateur existe déjà dans la base de données
            const existingUser = await prisma.user.findUnique({
                where: {
                    email: email,
                },
            });

            if (existingUser) {
                // L'utilisateur existe déjà dans la base de données
                res.status(409).json({ message: 'User already exists' });
            } else {
                // L'utilisateur n'existe pas dans la base de données, créez-le
                const hashedPassword = await bcrypt.hash(password, 10);

                const user = await prisma.user.create({
                    data: {
                        name: name,
                        email: email,
                    },
                });

                res.status(201).json(user);
            }
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Failed to create user' });
        }
    });

    // Utilisez le gestionnaire de requêtes Next.js pour gérer toutes les autres requêtes
    server.all('*', (req, res) => {
        return handle(req, res);
    });

    // Démarrez le serveur sur le port 3000
    server.listen(3000, () => {
        console.log('Server started on port 3000');
    });
});
