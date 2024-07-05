// pages/api/auth/login.ts
import { NextApiRequest, NextApiResponse } from 'next';
import prisma from '@/lib/prisma';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'POST') {
    const { username, password } = req.body;

    try {
      if (!username) {
        return res.status(400).json({ message: 'Username is required' });
      }

      const user = await prisma.user.findUnique({
        where: { name: username as string },
      });

      if (!user) {
        return res.status(401).json({ message: 'Invalid username or password' });
      }

      const passwordMatch = await bcrypt.compare(password, user.password);
      if (!passwordMatch) {
        return res.status(401).json({ message: 'Invalid username or password' });
      }

      const secret = process.env.NEXT_PUBLIC_JWT_SECRET;
      if (!secret) {
        throw new Error('JWT_SECRET is not defined');
      }

      const token = jwt.sign({ userName: user.name }, secret, {
        expiresIn: '10y',
      });

      res.status(200).json({ message: 'Login successful', token });
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : 'Unknown error';
      res.status(500).json({ message: 'Internal server error', error: errorMessage });
    }
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
};
