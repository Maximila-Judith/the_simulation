import React, { useEffect, useState } from 'react'
import styles from '@/app/slideshow.module.css'
import Image from 'next/image';
import Link from 'next/link';
import { ChevronLeft, ChevronRight } from 'lucide-react';



export const Myslides = () => {
    const images = ['/img/p1.jpg', '/img/p2.jpg', '/img/p3.jpg']
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
        <div className="flex flex-row items-center gap-y-10 gap-x-20 pl-20 pr-20 ">
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
                            className={`h-2 w-2 rounded-full ${currentIndex === index ? 'bg-gray-800' : 'bg-gray-300'}`}
                        />
                    ))}
                </div>
            </div>
            <div className={`flex flex-col w-1/2 space-y-3 ${styles.slidein}`}>
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
