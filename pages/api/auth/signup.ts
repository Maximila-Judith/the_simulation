
import { NextApiRequest, NextApiResponse } from 'next';
import prisma from '@/lib/prisma';
import bcrypt from 'bcrypt';


export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'POST') {
    const { username, email, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);

    try {
      const user = await prisma.user.create({
        data: {
          name: username,
          email: email || null,
          password: hashedPassword,
        },
      });
      res.status(201).json({ message: 'User created successfully', user });
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : 'Unknown error';
      res.status(400).json({ message: 'User creation failed', error: errorMessage });
    }
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
};
