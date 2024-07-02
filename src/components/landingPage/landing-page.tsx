'use client'
import React, { useEffect, useState } from "react";
import {
    Menubar,
    MenubarCheckboxItem,
    MenubarContent,
    MenubarItem,
    MenubarMenu,
    MenubarRadioGroup,
    MenubarRadioItem,
    MenubarSeparator,
    MenubarShortcut,
    MenubarSub,
    MenubarSubContent,
    MenubarSubTrigger,
    MenubarTrigger,
} from "@/components/ui/menubar"
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuIndicator,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    NavigationMenuViewport,
} from "@/components/ui/navigation-menu"

import Link from "next/link";
import Image from "next/image";
import { Button } from "../ui/button";
import { setInterval } from "timers"
import styles from '@/app/diaporama.module.css'
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Slideshow } from "../ui/slideshow";
import { Myslides } from "../ui/myslides";
import { Menu, Newspaper, X } from "lucide-react";
import { ThisMenu } from "../ui/thisMenu";
import { Separator } from "@/components/ui/separator"
import { Theslide } from "../ui/theslide";
import { Step } from '../ui/step';
import { TypedText } from "../ui/typetext";
import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init({
    duration: 1500,
    easing: 'ease-in-out',
    once: true
});


export function Landing() {
    const images = ['/111.jpg', '/g2.jpg', '/nnn.jpg', '/333.jpg']
    const [image, setImage] = useState(0)
    const [menuOpen, setMenuOpen] = useState(false)
    const [currentStep, setCurrentStep] = useState(1)

    const toggleMenu = () => {
        setMenuOpen(!menuOpen)

    }

    useEffect(() => {
        const interval = setInterval(() => {
            setImage((index) =>
                index === images.length - 1 ? 0 : index + 1
            )
        }, 4000)
        return () => clearInterval(interval)
    }, [])

    const handleClick = () => {
        window.location.href = '/accueil';
        console.log('ok')
    }

    const handleStepChange = (step: number) => {
        setCurrentStep(step)
    }

    return (
        <div className=" relative mx-auto bg-neutral-300">

            <div className={` flex flex-col pt-3 bg-no-repeat bg-cover bg-center h-screen lg:max-h-96 max-w-full block ${styles['background-slide']}`} style={{ backgroundImage: `url(${images[image]})` }}>
                <div className="flex flex-row justify-between pl-5 items-center fixed top-0 left-0 w-full z-50 bg-gray-400">
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
                            className={`absolute left-0 right-0 mt-2 mb-20 bg-white border rounded-lg shadow-lg z-10 lg:flex lg:flex-row lg:static lg:mt-0 lg:bg-transparent lg:border-0 lg:shadow-none lg:z-auto sm:p-4 sm:m-2 ${menuOpen ? "block " : " hidden"
                                }`}
                        >
                            <ThisMenu />
                        </div>
                    </div>
                </div>
                <div className={`flex flex-col lg:mb-10 w-full lg:w-2/4 place-self-center bg-transparent opacity-100 pl-8 space-y-4 lg:mt-10 pt-20 mt-10 overflow-x-hidden overflow-y-hidden `}>
                    <h1 className={`text-2xl text-center mt-10 font-bold text-white inline-block`} > Simuler vos Impôts conformément au Code Géneral des Impôts 2024 </h1>
                    <Link href="" onClick={handleClick} className="mt-6 bg-white inline-block text-black font-bold py-2 px-6 rounded-lg self-center hover:bg-gray-400 transition duration-200">Simulation rapide</Link>
                </div>
            </div>

            <div className=" text-center w-full justify-center p-20 ">
                <div className="flex flex-col justify-center mr-40 ml-40 p-30">
                    <h1 className="font-bold self-center text-neutral-900 inline-block text-3xl">Les différents impôts au Bénin </h1>
                    <p className="pt-5 text-center text-md inline-block">
                        Simuler ses impôts au Bénin est simple et rapide grâce à notre application intuitive. Suivez ces trois étapes faciles pour obtenir une estimation précise de vos impôts.
                    </p>
                </div>
                <div className="flex flex-col lg:flex-row justify-center items-center gap-y-10 lg:gap-x-10 pt-10 transition ease-in-out duration-1000" data-aos="fade-up" data-aos-delay="400">
                    <Card className={`drop-shadow-md ${styles['card']}`}>
                        <CardHeader>
                            <div className="flex flex-col items-center">
                                <div className="flex flex-rows items-center space-x-6 hover:text-blue-900 hover:font-bold">
                                    <Newspaper className="fill-black-600 text-black-950 size-10 " />
                                    <h2 className="uppercase font-bold inline-block text-left ">Impôt sur les Bénéfices d'Affaires (IBA)</h2>
                                </div>
                            </div>
                            <Separator />
                        </CardHeader>
                        <CardContent className="space-y-2">
                            <CardDescription className="text-md p-1 text-semibold text-black">L'Impôt sur les Bénéfices d'Affaires concerne les personnes physiques qui accomplissent, pour leur propre compte, une activité à caractère lucratif.</CardDescription>
                            <Link href="" onClick={handleClick} className="mt-6 bg-gray-500 inline-block text-black font-bold py-2 px-20 justify-center hover:bg-gray-400 transition duration-200">Simuler</Link>
                        </CardContent>
                    </Card>

                    <Card className={`drop-shadow-md ${styles['card']}`}>
                        <CardHeader>
                            <div className="flex flex-col items-center">
                                <div className="flex flex-rows items-center space-x-6 hover:text-blue-900 hover:font-bold">
                                    <Newspaper className="fill-black-600 text-black-950 size-9" />
                                    <h2 className="uppercase font-bold inline-block text-left ">Impôt sur les Revenus Fonciers (IRF)</h2>
                                </div>
                            </div>
                            <Separator />
                        </CardHeader>
                        <CardContent className="space-y-8">
                            <CardDescription className="text-md p-1 text-semibold text-black">L'Impôt sur les Revenus Fonciers (IRF) est dû par les personnes physiques et assimilées qui perçoivent des revenus fonciers.</CardDescription>
                            <Link href="" onClick={handleClick} className="mt-6 bg-gray-500 inline-block text-black font-bold py-2 px-20 justify-center hover:bg-gray-400 transition duration-200">Simuler</Link>
                        </CardContent>
                    </Card>

                    <Card className={`drop-shadow-md ${styles['card']}`}>
                        <CardHeader>
                            <div className="flex flex-col items-center">
                                <div className="flex flex-rows items-center space-x-6 hover:text-blue-900 hover:font-bold">
                                    <Newspaper className="fill-black-600 text-black-950 size-7" />
                                    <h2 className="uppercase font-bold inline-block text-left">Impôt sur les Sociétés (IS)</h2>
                                </div>
                            </div>
                            <Separator />
                        </CardHeader>
                        <CardContent className="space-y-2">
                            <CardDescription className="text-md p-1 text-semibold text-black">L'Impôt sur les Sociétés s'applique aux bénéfices réalisés par les sociétés et autres personnes morales telles que désignées par le Code Général des Impôts</CardDescription>
                            <Link href="" onClick={handleClick} className="mt-6 bg-gray-500 inline-block text-black font-bold py-2 px-20 justify-center hover:bg-gray-400 transition duration-200">Simuler</Link>
                        </CardContent>
                    </Card>
                </div>

            </div>
            {/* <div className="pt-20 pr-20 pl-20 justify-center pb-20 space-y-10 bg-[url('/img/b2.jpg')] transition ease-in-out duration-1000" data-aos="fade-up" data-aos-delay="400">
                <Theslide onProgressChange={handleProgressChange} />
                {currentSlide === 'Myslides' ? <Myslides /> : <Slideshow />}
            </div> */}
            <div className="pt-20 pr-20 pl-20 justify-center pb-20 space-y-10 bg-[url('/img/b2.jpg')] transition ease-in-out duration-1000" data-aos="fade-up" data-aos-delay="400">
                <Step currentStep={currentStep} onStepChange={handleStepChange} />
                {/* <Theslide currentStep={currentStep} onStepChange={handleStepChange} /> */}
                {currentStep === 1 ? <Myslides /> : <Slideshow />}
            </div>

            <footer className=" bg-gradient-to-b from-gray-200 to-neutral-800 w-full">
                <div className="w-full max-w-[85rem] py-10 px-4 sm:px-6 lg:px-8 lg:pt-20 mx-auto">
                    <div className="mt-5 sm:mt-12 grid gap-y-2 sm:gap-y-0 sm:flex sm:justify-between sm:items-center">
                        <div className="flex justify-between items-center">
                            <div className="col-span-full lg:col-span-1">
                                <a className="flex-none text-xl font-semibold text-white" href="#" aria-label="Brand">
                                    <Image
                                        src="/img/benin.png"

                                        alt="icon 1"
                                        width={200}
                                        height={350}
                                        priority
                                    />
                                </a>
                            </div>
                        </div>
                        <div className="flex flex-col items-center space-y-4">
                            <p className="text-sm text-gray-400 dark:text-neutral-400"></p>
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
                <p className="text-center pb-5 text-white text-sm">© 2024 Direction Générale des Impots Bénin. Tous droits réservés.</p>
            </footer>
        </div >
    )
}