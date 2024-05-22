import React, { useEffect, useState } from 'react'
import styles from '@/app/slideshow.module.css'
import Image from 'next/image';
import Link from 'next/link';


export const Myslides = () => {
    const images = ['/img/p1.jpg', '/img/p2.jpg', '/img/p3.jpg']
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isHovered, setIsHovered] = useState(false);

    useEffect(() => {
        let interval: NodeJS.Timeout;
        if (isHovered) {
            interval = setInterval(() => {
                setCurrentIndex((one) => (one + 1) % images.length);
            }, 3000);
        }
        return () => {
            if (interval) clearInterval(interval);
        };
    }, [isHovered])
    return (
        <div className="flex flex-row items-center gap-x-20 pl-20 pr-20" onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
            <div className={`${styles.slideshow}`}>
                {images.map((src, index) => (
                    <Image
                        key={index}
                        src={src}
                        alt={`image ${index + 1}`}
                        width={400}
                        height={600}
                        priority
                        className={`${styles.card} ${index === currentIndex ? styles.active : ''}`}
                    />
                ))}
            </div>
            <div className={`flex flex-col space-y-3 ${styles.slidein}`}>
                <h1 className="font-bold text-xl uppercase text-center">Impôt pour particulier</h1>
                <p className="text-lg text-center">
                    Tout savoir sur les impôts pour particuliers au Bénin.
                    Comprendre les démarches et les obligations fiscales.
                    Restez informé des dernières actualités fiscales béninoises.
                    Restez informé des dernières actualités fiscales béninoises.
                    Restez informé des dernières actualités fiscales béninoises.
                </p>
                <Link href="/" className="mt-6 bg-gray-200 font-semibold text-lg py-2 px-6 rounded-full self-center hover:bg-gray-200 transition duration-200">Simuler</Link>
            </div>
        </div>
    )
}
