'use client'
import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import {
    Menubar,
    MenubarContent,
    MenubarItem,
    MenubarMenu,
    MenubarTrigger,
} from "@/components/ui/menubar";
import Link from "next/link";
import Image from "next/image";
import styles from '@/app/diaporama.module.css';
import {
    Card,
    CardHeader,
} from "@/components/ui/card";
import { Slideshow } from "../ui/slideshow";
import { Myslides } from "../ui/myslides";

export function Landing() {
    const images = ['/111.jpg', '/222.jpg', '/333.jpg'];

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        cssEase: "linear"
    };

    const handleClick = () => {
        window.location.href = '/accueil';
    };

    return (
        <div className="">
            <div className="flex flex-col bg-no-repeat bg-cover bg-center max-h-96 block">
                <Slider {...settings} className={styles['carousel']}>
                    {images.map((src, index) => (
                        <div key={index}>
                            <div
                                className="flex flex-col items-center justify-center bg-cover bg-center h-96"
                                style={{ backgroundImage: `url(${src})` }}
                            >
                                <div className="flex flex-row justify-between p-3 w-full">
                                    <Image
                                        src="/dgi-white.webp"
                                        alt="icon 1"
                                        width={200}
                                        height={350}
                                        priority
                                    />
                                    <div>
                                        <Menubar className="justify-end bg-transparent opacity-100 border-none text-white">
                                            <MenubarMenu >
                                                <MenubarTrigger>
                                                    <Link rel="stylesheet" href="/">Accueil</Link>
                                                </MenubarTrigger>
                                            </MenubarMenu>
                                            <MenubarMenu>
                                                <MenubarTrigger>
                                                    <Link rel="stylesheet" href="">Simulation</Link>
                                                </MenubarTrigger>
                                                <MenubarContent>
                                                    <MenubarItem className="text-md text-semibold italic">
                                                        <Link rel="stylesheet" href="" onClick={handleClick}>
                                                            Impot sur les Sociétés (IS)
                                                        </Link>
                                                    </MenubarItem>
                                                    <MenubarItem className="text-md text-semibold italic">
                                                        <Link rel="stylesheet" href="" onClick={handleClick}>
                                                            Impot sur les Bénéfices d'Affaire (IBA)
                                                        </Link>
                                                    </MenubarItem>
                                                    <MenubarItem className="text-md text-semibold italic">
                                                        <Link rel="stylesheet" href="" onClick={handleClick}>
                                                            Impot sur les Revenus Fonciers (IRF)
                                                        </Link>
                                                    </MenubarItem>
                                                    <MenubarItem className="text-md text-semibold italic">
                                                        <Link rel="stylesheet" href="" onClick={handleClick}>
                                                            Impot sur les Traitement de Salaire (ITS)
                                                        </Link>
                                                    </MenubarItem>
                                                    <MenubarItem className="text-md text-semibold italic">
                                                        <Link rel="stylesheet" href="" onClick={handleClick}>
                                                            Taxe Professionnelle Synthétique (TPS)
                                                        </Link>
                                                    </MenubarItem>
                                                    <MenubarItem className="text-md text-semibold italic">
                                                        <Link rel="stylesheet" href="" onClick={handleClick}>
                                                            Taxe Foncière Unique (TFU)
                                                        </Link>
                                                    </MenubarItem>
                                                </MenubarContent>
                                            </MenubarMenu>
                                            <MenubarMenu>
                                                <MenubarTrigger>
                                                    <Link rel="stylesheet" href="">Documentation</Link>
                                                </MenubarTrigger>
                                                <MenubarContent>
                                                    <MenubarItem className="text-md text-semibold italic">
                                                        <Link rel="stylesheet" href="https://api.impots.bj/media/65d5ae32a155a_B%C3%A9nin-Code%20G%C3%A9n%C3%A9ral%20des%20Imp%C3%B4ts%202024.pdf">
                                                            Code Général des Impôts 2024 (CGI)
                                                        </Link>
                                                    </MenubarItem>
                                                    <MenubarItem className="text-md text-semibold italic">
                                                        <Link rel="stylesheet" href="https://api.impots.bj//media/63b450bf40bf1_Code%20G%C3%A9n%C3%A9ral%20des%20Imp%C3%B4ts%20(Version%20citoyenne).pdf">
                                                            Code Général des Impôts 2024 (V.C)
                                                        </Link>
                                                    </MenubarItem>
                                                </MenubarContent>
                                            </MenubarMenu>
                                            <MenubarMenu>
                                                <MenubarTrigger>
                                                    <Link rel="stylesheet" href="">A Propos</Link>
                                                </MenubarTrigger>
                                            </MenubarMenu>
                                        </Menubar>
                                    </div>
                                </div>

                                <div className="flex flex-col mb-20 w-2/4 place-self-center bg-transparent opacity-100 pl-8 space-y-4 mt-10 pt-10">
                                    <h1 className="text-2xl text-center font-bold text-white">Simuler vos Impôts conformément au Code Géneral des Impôts 2024</h1>
                                    <Link href="" onClick={handleClick} className="mt-6 bg-white text-black font-bold py-2 px-6 rounded-full self-center hover:bg-gray-200 transition duration-200">Simuler</Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>

            <div className="bg-gray-100 text-center justify-center p-20">
                <h1 className="font-bold uppercase text-xl">Comment simuler ses impôts ?</h1>
                <p className="pt-5 text-center">
                    La simulation est régulièrement mis à jour pour refléter les dernières modifications apportées au CIG, ce qui vous permet de rester en conformité avec les lois fiscales en vigueur au Bénin ; alors essayez une expérience fiscale simplifiée et sans stress.
                </p>

                <div className="flex justify-center items-center gap-x-10 pt-10">
                    <Card className={`drop-shadow-md ${styles['card']}`}>
                        <CardHeader>
                            <div className="flex flex-col items-center space-y-10">
                                <Image
                                    src="/aaa.jpg"
                                    alt="icon 1"
                                    width={70}
                                    height={70}
                                    priority
                                    className="rounded-full"
                                />
                                <h5>Simuler simuler simuler simuler simuler simuler simuler simuler simuler simuler simuler simuler simuler </h5>
                            </div>
                        </CardHeader>
                    </Card>

                    <Card className={`drop-shadow-md ${styles['card']}`}>
                        <CardHeader>
                            <div className="flex flex-col items-center space-y-10">
                                <Image
                                    src="/ccc.jpg"
                                    alt="icon 1"
                                    width={70}
                                    height={70}
                                    priority
                                    className="rounded-full"
                                />
                                <h5>Simuler simuler simuler simuler simuler simuler simuler simuler simuler simuler simuler simuler simuler </h5>
                            </div>
                        </CardHeader>
                    </Card>

                    <Card className={`drop-shadow-md ${styles['card']}`}>
                        <CardHeader>
                            <div className="flex flex-col items-center space-y-10">
                                <Image
                                    src="/ddd.jpg"
                                    alt="icon 1"
                                    width={70}
                                    height={70}
                                    priority
                                    className="rounded-full"
                                />
                                <h5>Simuler simuler simuler simuler simuler simuler simuler simuler simuler simuler simuler simuler simuler </h5>
                            </div>
                        </CardHeader>
                    </Card>

                </div>
            </div>

            <div className="pt-10 pr-20 pl-20 text-2xl pb-20 space-y-20">
                <Myslides />
                <Slideshow />
            </div>

            <footer className="bg-gray-900 w-full">
                <div className="w-full max-w-[85rem] py-10 px-4 sm:px-6 lg:px-8 lg:pt-20 mx-auto">
                    <div className="mt-5 sm:mt-12 grid gap-y-2 sm:gap-y-0 sm:flex sm:justify-between sm:items-center">
                        <div className="flex justify-between items-center">
                            <div className="col-span-full lg:col-span-1">
                                <a className="flex-none text-xl font-semibold text-white" href="#" aria-label="Brand">
                                    <Image
                                        src="/dgi-white.webp"
                                        alt="icon 1"
                                        width={200}
                                        height={350}
                                        priority
                                    />
                                </a>
                            </div>
                        </div>
                        <div className="flex flex-col items-center space-y-4">
                            <p className="text-sm text-gray-400 dark:text-neutral-400">© 2024 BENIN. All rights reserved.</p>
                            <div className="flex flex-row items-center space-x-6">
                                <a className="size-10 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent text-white hover:bg-white/10 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:ring-1 focus:ring-gray-600" href="#">
                                    <svg className="flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                                        <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" />
                                    </svg>
                                </a>
                                <a className="size-10 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent text-white hover:bg-white/10 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:ring-1 focus:ring-gray-600" href="#">
                                    <svg className="flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                                        <path d="M15.545 6.558a9.42 9.42 0 0 1 .139 1.626c0 2.434-.87 4.492-2.384 5.885h.002C11.978 15.292 10.158 16 8 16A8 8 0 1 1 8 0a7.689 7.689 0 0 1 5.352 2.082l-2.284 2.284A4.347 4.347 0 0 0 8 3.166c-2.087 0-3.86 1.408-4.492 3.304a4.792 4.792 0 0 0 0 3.063h.003c.635 1.893 2.405 3.301 4.492 3.301 1.078 0 2.004-.276 2.722-.764h-.003a3.702 3.702 0 0 0 1.599-2.431H8v-3.08h7.545z" />
                                    </svg>
                                </a>
                                <a className="size-10 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent text-white hover:bg-white/10 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:ring-1 focus:ring-gray-600" href="#">
                                    <svg className="flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                                        <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z" />
                                    </svg>
                                </a>
                                <a className="size-10 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent text-white hover:bg-white/10 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:ring-1 focus:ring-gray-600" href="#">
                                    <svg className="flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                                        <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
                                    </svg>
                                </a>
                                <a className="size-10 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent text-white hover:bg-white/10 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:ring-1 focus:ring-gray-600" href="#">
                                    <svg className="flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                                        <path d="M3.362 10.11c0 .926-.756 1.681-1.681 1.681S0 11.036 0 10.111C0 9.186.756 8.43 1.68 8.43h1.682v1.68zm.846 0c0-.924.756-1.68 1.681-1.68s1.681.756 1.681 1.68v4.21c0 .924-.756 1.68-1.68 1.68a1.685 1.685 0 0 1-1.682-1.68v-4.21zM5.89 3.362c-.926 0-1.682-.756-1.682-1.681S4.964 0 5.89 0s1.68.756 1.68 1.68v1.682H5.89zm0 .846c.924 0 1.68.756 1.68 1.681S6.814 7.57 5.89 7.57H1.68C.757 7.57 0 6.814 0 5.89c0-.926.756-1.682 1.68-1.682h4.21zm6.749 1.682c0-.926.755-1.682 1.68-1.682.925 0 1.681.756 1.681 1.681s-.756 1.681-1.68 1.681h-1.681V5.89zm-.848 0c0 .924-.755 1.68-1.68 1.68A1.685 1.685 0 0 1 8.43 5.89V1.68C8.43.757 9.186 0 10.11 0c.926 0 1.681.756 1.681 1.68v4.21zm-1.681 6.748c.926 0 1.682.756 1.682 1.681S11.036 16 10.11 16s-1.681-.756-1.681-1.68v-1.682h1.68zm0-.847c-.924 0-1.68-.755-1.68-1.68 0-.925.756-1.681 1.68-1.681h4.21c.924 0 1.68.756 1.68 1.68 0 .926-.756 1.681-1.68 1.681h-4.21z" />
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>

        </div >
    )
}