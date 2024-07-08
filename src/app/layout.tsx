"use client";

import { Montserrat } from "next/font/google";
import Image from "next/image";
import "./globals.css";
import { ThisMenu } from "@/components/ui/thisMenu";
import { useRouter } from 'next/navigation';
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const montserrat = Montserrat({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const router = useRouter();
  const [token, setToken] = useState('');
  const [userData, setUserData] = useState({ userName: '' });
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isColorChanged, setIsColorChanged] = useState(false);

  useEffect(() => {
    let token = localStorage.getItem('jwt-token') || '';
    setToken(token);

    fetch('/api/auth/safehouse', {
      headers: {
        'jwt-token': token,
      },
    })
      .then((res) => res.json())
      .then((data) => setUserData(data));

    // Change la couleur après 20 secondes
    const colorChangeTimeout = setTimeout(() => {
      setIsColorChanged(true);
    }, 1000);

    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(colorChangeTimeout);
    };
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const logout = () => {
    setToken('');
    localStorage.removeItem('jwt-token');
    router.push('/login');
  };

  return (
    <html lang="en">
      <body className={montserrat.className}>
        <header>
          <div className={`flex flex-row justify-between pl-5 items-center fixed top-0 left-0 w-full z-50 transition-all duration-500 ${isScrolled ? (isColorChanged ? "bg-gray-300 shadow-md" : "") : ""}`}>
            <Image
              src="/img/benin.png"
              alt="icon 1"
              width={150}
              height={150}
              priority
              className="opacity-100"
            />
            <div className="relative">
              <button
                onClick={toggleMenu}
                className="items-center justify-center lg:hidden sm:block md:block rounded-lg w-10 h-10 hover:bg-gray-300 hover:bg-opacity-40 focus:outline-none"
              >
                {menuOpen ? <X className="" /> : <Menu className="" />}
              </button>
              <div
                className={`absolute left-0 right-0 mt-2 mb-20 bg-white border rounded-lg shadow-lg z-10 lg:flex lg:flex-row lg:static lg:mt-0 lg:bg-transparent lg:border-0 lg:shadow-none lg:z-auto sm:p-4 sm:m-2 ${menuOpen ? "block" : "hidden"
                  }`}
              >
                <ThisMenu handleClicka={logout} />
              </div>
            </div>
          </div>
        </header>
        <main>{children}</main>
      </body>
    </html>
  );
}
