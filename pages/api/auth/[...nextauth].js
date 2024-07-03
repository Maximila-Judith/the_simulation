// pages/api/auth/[...nextauth].js
import NextAuth from 'next-auth';

export default NextAuth({
  database: process.env.DATABASE_URL, 
});
