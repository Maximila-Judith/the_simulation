import React, { useEffect, useState } from 'react'
import styles from '@/app/slideshow.module.css'
import Image from 'next/image';
import Link from 'next/link';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Separator } from './separator';



export const Myslides = () => {
    const images = ['/img/r1.jpg', '/img/t2.jpg', '/img/t3.jpg']
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
        <div className="flex lg:flex-row flex-col jstify-center items-center gap-x-10 pl-20 ml-20">
            <div className="relative flex items-center">
                {/* <button onClick={previous} className="absolute left-0 z-10 p-2 h-20 hover:bg-opacity-30 hover:bg-black shadow-md">
                    <ChevronLeft className='text-white' size={24} />
                </button> */}
                <Image
                    src={images[currentIndex]}
                    alt={`image ${currentIndex + 1}`}
                    width={400}
                    height={400}
                    priority
                    className='rounded-2xl'
                />
                {/* <button onClick={next} className="absolute right-0 z-10 p-2 h-20 hover:bg-opacity-30 hover:bg-black shadow-md">
                    <ChevronRight className='text-white' size={24} />
                </button> */}
            </div>
            <div className="flex flex-row items-center w-1/2 space-x-4">
                <div className='flex flex-col space-y-3'>
                    <h1 className="font-bold text-lg text-white text-left">Impôt pour particulier</h1>
                    <p className="text-sm text-left text-white">
                        Tout savoir sur les impôts pour particuliers au Bénin.
                        Comprendre les démarches et les obligations fiscales.
                        Restez informé des dernières actualités fiscales béninoises.
                        Restez informé des dernières actualités fiscales béninoises.
                        Restez informé des dernières actualités fiscales béninoises.
                    </p>
                    <Link href="/" >
                        <button className="mt-6 bg-gray-700 hover:bg-gray-600 font-semibold text-sm py-2 px-4 rounded-full self-left text-white transition duration-200">Simuler</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

/* <div className="flex flex-row items-center gap-y-10 gap-x-20 -mr-20">
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
                        className='rounded-xl'
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
            <div className={`flex flex-col w-1/2 space-y-3 ${styles.slidein}`}>
                <h1 className="font-bold text-lg text-neutral-800 text-left">Impôt pour particulier</h1>
                <p className="text-sm text-left text-neutral-600">
                    Tout savoir sur les impôts pour particuliers au Bénin.
                    Comprendre les démarches et les obligations fiscales.
                    Restez informé des dernières actualités fiscales béninoises.
                    Restez informé des dernières actualités fiscales béninoises.
                    Restez informé des dernières actualités fiscales béninoises.
                </p>
                <Link href="/" >
                    <button className="mt-6 bg-gray-700 hover:bg-gray-600 font-semibold text-sm py-2 px-4 rounded-full self-left text-white transition duration-200">Simuler</button>
                </Link>
            </div>
        </div> */
