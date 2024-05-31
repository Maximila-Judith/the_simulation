const express = require('express');
const { PrismaClient } = require('@prisma/client');

const app = express();
const prisma = new PrismaClient();

app.use(express.json());

// Créez un nouvel utilisateur dans la base de données
app.post('/api/users', async (req, res) => {
    const { name, email } = req.body;

    try {
        const user = await prisma.user.create({
            data: {
                name: name,
                email: email,
            },
        });

        res.status(201).json(user);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Failed to create user' });
    }
});

// Créez un nouveau résultat de simulation dans la base de données et associez-le à l'utilisateur
app.post('/api/results', async (req, res) => {
    const { tax_name, tax_base, amount, rate, minimum, price_add, tax_price, User_id } = req.body;

    try {
        const result = await prisma.result.create({
            data: {
                tax_name: tax_name,
                tax_base: tax_base,
                amount: amount,
                rate: rate,
                minimum: minimum,
                price_add: price_add,
                tax_price: tax_price,
                User_id: User_id,
            },
        });

        res.status(201).json(result);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Failed to create result' });
    }
});

// Récupérez tous les résultats de simulation pour un utilisateur donné
app.get('/api/results/:email', async (req, res) => {
    const { email } = req.params;

    try {
        const results = await prisma.result.findMany({
            where: {
                User: {
                    email: email,
                },
            },
        });

        res.status(200).json(results);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Failed to retrieve results' });
    }
});

// Démarrez le serveur sur le port 3000
app.listen(3000, () => {
    console.log('Server started on port 3000');
});
