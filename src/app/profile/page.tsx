'use client';
import { useEffect, useState } from 'react';
import jwt from 'jsonwebtoken';
import { useRouter } from 'next/navigation';

const Profile: React.FC = () => {
  const router = useRouter();
  const [token, setToken] = useState('')
  const [userData, setUserData] = useState({ userName: ''})

  useEffect(() => {
    let token = localStorage.getItem('jwt-token');
        token = token?token:''
    setToken(token);

    fetch('/api/auth/safehouse', {
      headers: {
        'jwt-token': token,
      },
    })
      .then((res) => res.json())
      .then((data) => setUserData(data))
  }, [])


  function logout() {
    setToken('')
    localStorage.removeItem('jwt-token')
    router.push('/login');
  }

  if (!token) {
    return (
      <>
        <main style={{ padding: '50px' }}>
          <p>You&apos;re not logged in.</p>
        </main>
      </>
    )
  }
  return (
    <>
      <main style={{ padding: '50px' }}>
        <h1>Safehouse </h1>
        <p>
          You Safehouse key is <strong>{userData.userName}</strong>
        </p>
        <button onClick={logout}>Logout</button>
      </main>
    </>
  );
};

export default Profile;