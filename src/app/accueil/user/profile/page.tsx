// pages/profile.tsx
'use client'
import { useEffect, useState } from 'react';
import { parseCookies, destroyCookie } from 'nookies';
import jwt from 'jsonwebtoken';
import { useRouter } from 'next/navigation';

interface DecodedToken {
  userId: string;
}

const Profile: React.FC = () => {
  const [decodedToken, setDecodedToken] = useState<DecodedToken | null>(null);
  const router = useRouter();

  useEffect(() => {
    const { token } = parseCookies();
    if (token) {
      try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET!) as DecodedToken;
        setDecodedToken(decoded);
      } catch (error) {
        console.error('Error decoding token:', error);
        destroyCookie(null, 'token');
        router.push('/accueil/user/login');
      }
    } else {
      router.push('/user/login');
    }
  }, [router]);

  const handleLogout = () => {
    destroyCookie(null, 'token');
    router.push('/user/login');
  };

  if (!decodedToken) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <h1>Profile</h1>
      <p>Welcome, User #{decodedToken.userId}</p>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Profile;
