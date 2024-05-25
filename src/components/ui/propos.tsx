import React from 'react'
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import Image from "next/image"
import styles from '@/app/diaporama.module.css'
import { ThisMenu } from './thisMenu'


export const Propos = () => {
    return (
        <div className="bg-neutral-300 text-center w-full justify-center p-20 ">
            <ThisMenu />
            <div className="flex flex-col lg:flex-row justify-center items-center gap-y-10 lg:gap-x-10 pt-10 ">
                <Card className={`drop-shadow-md space-y-2 ${styles['card']}`}>
                    <CardHeader>
                        <div className="flex flex-col items-center">
                            <Image
                                src="/img/c1.jpg"
                                alt="icon 1"
                                width={100}
                                height={100}
                                priority
                                className=""
                            />
                        </div>
                    </CardHeader>
                    <CardContent className="space-y-2">
                        <h2 className="uppercase font-bold inline-block text-center text-violet-800">Accéder à la plateforme</h2>
                        <CardDescription className="text-sm p-1 text-semibold text-black">Accéder à l'application de simulation d'impôts et commencez par entrer vos informations de base.</CardDescription>
                    </CardContent>
                </Card>

                <Card className={`drop-shadow-md space-y-2 ${styles['card']}`}>
                    <CardHeader>
                        <div className="flex flex-col items-center">
                            <Image
                                src="/img/c2.jpg"
                                alt="icon 1"
                                width={100}
                                height={100}
                                priority
                                className=""
                            />
                        </div>
                    </CardHeader>
                    <CardContent className="space-y-2">
                        <h2 className="uppercase font-bold inline-block text-center text-violet-800">Répondre aux questions </h2>
                        <CardDescription className="text-sm p-1 text-semibold text-black">L'application vous posera une série de questions spécifiques concernant vos revenus, dépenses et situation fiscale.</CardDescription>
                    </CardContent>
                </Card>

                <Card className={`drop-shadow-md space-y-2 ${styles['card']}`}>
                    <CardHeader>
                        <div className="flex flex-col items-center">
                            <Image
                                src="/img/c3.jpg"
                                alt="icon 1"
                                width={100}
                                height={100}
                                priority
                                className=""
                            />
                        </div>
                    </CardHeader>
                    <CardContent className="space-y-2">
                        <h2 className="uppercase font-bold inline-block text-center text-violet-800">Obtenir le résultat </h2>
                        <CardDescription className="text-sm p-1 text-semibold text-black">En fonction de vos réponses, vous recevrez une estimation détaillée de la nature de chaque impôt applicable.</CardDescription>
                    </CardContent>
                </Card>
            </div>

            <div className="flex flex-col lg:flex-row justify-center items-center gap-y-10 lg:gap-x-10 pt-10 ">
                <Card className={`drop-shadow-md space-y-2 ${styles['card']}`}>
                    <CardHeader>
                        <div className="flex flex-col items-center">
                            <Image
                                src="/img/c1.jpg"
                                alt="icon 1"
                                width={100}
                                height={100}
                                priority
                                className=""
                            />
                        </div>
                    </CardHeader>
                    <CardContent className="space-y-2">
                        <h2 className="uppercase font-bold inline-block text-center text-violet-800">Accéder à la plateforme</h2>
                        <CardDescription className="text-sm p-1 text-semibold text-black">Accéder à l'application de simulation d'impôts et commencez par entrer vos informations de base.</CardDescription>
                    </CardContent>
                </Card>

                <Card className={`drop-shadow-md space-y-2 ${styles['card']}`}>
                    <CardHeader>
                        <div className="flex flex-col items-center">
                            <Image
                                src="/img/c2.jpg"
                                alt="icon 1"
                                width={100}
                                height={100}
                                priority
                                className=""
                            />
                        </div>
                    </CardHeader>
                    <CardContent className="space-y-2">
                        <h2 className="uppercase font-bold inline-block text-center text-violet-800">Répondre aux questions </h2>
                        <CardDescription className="text-sm p-1 text-semibold text-black">L'application vous posera une série de questions spécifiques concernant vos revenus, dépenses et situation fiscale.</CardDescription>
                    </CardContent>
                </Card>

                <Card className={`drop-shadow-md space-y-2 ${styles['card']}`}>
                    <CardHeader>
                        <div className="flex flex-col items-center">
                            <Image
                                src="/img/c3.jpg"
                                alt="icon 1"
                                width={100}
                                height={100}
                                priority
                                className=""
                            />
                        </div>
                    </CardHeader>
                    <CardContent className="space-y-2">
                        <h2 className="uppercase font-bold inline-block text-center text-violet-800">Obtenir le résultat </h2>
                        <CardDescription className="text-sm p-1 text-semibold text-black">En fonction de vos réponses, vous recevrez une estimation détaillée de la nature de chaque impôt applicable.</CardDescription>
                    </CardContent>
                </Card>
            </div>

            <div className="flex flex-col lg:flex-row justify-center items-center gap-y-10 lg:gap-x-10 pt-10 ">
                <Card className={`drop-shadow-md space-y-2 ${styles['card']}`}>
                    <CardHeader>
                        <div className="flex flex-col items-center">
                            <Image
                                src="/img/c1.jpg"
                                alt="icon 1"
                                width={100}
                                height={100}
                                priority
                                className=""
                            />
                        </div>
                    </CardHeader>
                    <CardContent className="space-y-2">
                        <h2 className="uppercase font-bold inline-block text-center text-violet-800">Accéder à la plateforme</h2>
                        <CardDescription className="text-sm p-1 text-semibold text-black">Accéder à l'application de simulation d'impôts et commencez par entrer vos informations de base.</CardDescription>
                    </CardContent>
                </Card>

                <Card className={`drop-shadow-md space-y-2 ${styles['card']}`}>
                    <CardHeader>
                        <div className="flex flex-col items-center">
                            <Image
                                src="/img/c2.jpg"
                                alt="icon 1"
                                width={100}
                                height={100}
                                priority
                                className=""
                            />
                        </div>
                    </CardHeader>
                    <CardContent className="space-y-2">
                        <h2 className="uppercase font-bold inline-block text-center text-violet-800">Répondre aux questions </h2>
                        <CardDescription className="text-sm p-1 text-semibold text-black">L'application vous posera une série de questions spécifiques concernant vos revenus, dépenses et situation fiscale.</CardDescription>
                    </CardContent>
                </Card>

                <Card className={`drop-shadow-md space-y-2 ${styles['card']}`}>
                    <CardHeader>
                        <div className="flex flex-col items-center">
                            <Image
                                src="/img/c3.jpg"
                                alt="icon 1"
                                width={100}
                                height={100}
                                priority
                                className=""
                            />
                        </div>
                    </CardHeader>
                    <CardContent className="space-y-2">
                        <h2 className="uppercase font-bold inline-block text-center text-violet-800">Obtenir le résultat </h2>
                        <CardDescription className="text-sm p-1 text-semibold text-black">En fonction de vos réponses, vous recevrez une estimation détaillée de la nature de chaque impôt applicable.</CardDescription>
                    </CardContent>
                </Card>
            </div>
        </div>
    )
}

