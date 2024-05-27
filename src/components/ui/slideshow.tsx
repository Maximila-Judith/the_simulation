import React, { useState } from 'react';
import styles from '@/app/slideshow.module.css';
import Image from 'next/image';
import Link from 'next/link';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export const Slideshow = () => {
    const images = ['/img/e1.jpg', '/img/e2.jpg', '/img/e3.jpg'];
    const [currentIndex, setCurrentIndex] = useState(0);

    const next = () => {
        setCurrentIndex((index) => (index + 1) % images.length);
    }

    const previous = () => {
        setCurrentIndex((index) => (index - 1 + images.length) % images.length);
    }

    const goToSlide = (index: number) => {
        setCurrentIndex(index);
    }

    return (
        <div className="flex flex-row items-center gap-x-20 -mr-20 ">
            <div className={`flex flex-col w-1/2 space-y-3 ${styles.slideon}`}>
                <h1 className="font-bold text-md text-white uppercase text-center">Impôt pour entreprise</h1>
                <p className="text-sm text-center text-white">
                    Tout savoir sur les impôts pour particuliers au Bénin.
                    Comprendre les démarches et les obligations fiscales.
                    Restez informé des dernières actualités fiscales béninoises.
                    Restez informé des dernières actualités fiscales béninoises.
                    Restez informé des dernières actualités fiscales béninoises.
                </p>
                <Link href="/" className="mt-6 bg-gray-700 hover:bg-gray-600 font-semibold text-lg py-2 px-4 rounded-full self-center text-white transition duration-200">Simuler</Link>
            </div>
            <div className="relative">
                <div className="flex items-center">
                    <button onClick={previous} className="absolute left-0 z-10 p-2 h-20 hover:bg-opacity-30 hover:bg-black shadow-md">
                        <ChevronLeft className='text-white' size={24} />
                    </button>
                    <Image
                        src={images[currentIndex]}
                        alt={`image ${currentIndex + 1}`}
                        width={400}
                        height={400}
                        priority
                    />
                    <button onClick={next} className="absolute right-0 z-10 p-2 h-20 hover:bg-opacity-30 hover:bg-black shadow-md">
                        <ChevronRight className='text-white' size={24} />
                    </button>
                </div>
                <div className="flex justify-center mt-4 space-x-5">
                    {images.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => goToSlide(index)}
                            className={`h-2 w-2 rounded-full ${currentIndex === index ? 'bg-gray-800' : 'bg-gray-600'}`}
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}
