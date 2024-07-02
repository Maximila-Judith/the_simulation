// pages/api/auth/[...nextauth].js
import NextAuth from 'next-auth';
import Providers from 'next-auth/providers';

export default NextAuth({
  providers: [
    Providers.GitHub({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
    // Ajoutez d'autres providers ici
  ],
  database: process.env.DATABASE_URL, // Optionnel : si vous utilisez une base de données
});
