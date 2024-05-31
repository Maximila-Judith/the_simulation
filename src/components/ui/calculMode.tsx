import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Plus, TriangleAlert,Coins, Percent,Home, HandCoins,Minus } from "lucide-react";
import React from 'react';
import{useContext} from 'react'
import { HoverCardDemo } from "./hoverCardDemo"
import { ResultContext } from "@/lib/resultContext";
import { numberFormatRegex } from "@/lib/regex/numberRegex"
import Image from 'next/image';
import LoadingPercentage from '@/components/ui/circlePercent';

export const CalculMode = ({isCall}:{isCall:boolean}) => {
    const result = useContext(ResultContext)


    return (
        <div className = {`${isCall ? 'translate-y-0' : 'translate-y-full'} transition duration-1000 ease-out transform flex opacity-100 justify-center bg-emerald-50 flex-wrap content-end h-full`} >

         <div className=" flex flex-col space-y-4 bg-gray-300 w-full h-screen p-8 px-14">    
                <Card className={`${isCall ? 'translate-y-0' : 'translate-y-full'} transition duration-700 ease-in-out transform bg-neutral-700 border-zinc-500 hover:border-2 rounded-none  hover:border-lime-400 w-full h-[200px] p-0 mt-0 text-center`}>
                    <div className=" h-full flex flex-col ">
                        <CardHeader className="flex h-1/5 p-0 bg-green-800 pt-1 pl-2">
                            <CardTitle>
                                <div className="flex text-sm text-neutral-300 justify-start">
                                    <div className="flex flex-row items-center gap-2 ">
                                        <Percent className="text-green-600 bg-white rounded-full p-1 size-6 " />
                                        <HoverCardDemo item = "Pourcentage appliqué" />
                                    </div>
                                </div>
                            </CardTitle>
                        </CardHeader>
                        
                            {result.rate.length === 1 &&
                        <CardContent className="flex justify-center flex-wrap content-center text-white bg-gray-500 h-4/5 p-0  ">
                            <div className="">
                               <LoadingPercentage
                                    targetPercentage = {result.rate[0] as number} 
                                    size={130} color="#28a745" 
                                    thickness={10} 
                                    duration={5000}
                                />

                            </div>
                        </CardContent>}
                            {
                            result.rate.length === 2 &&
                        <CardContent className="flex justify-center flex-wrap content-center text-white bg-gray-500 h-4/5 p-0  ">
                            <div className="flex space-x-3 items-center  ">
                                            <LoadingPercentage
                                            targetPercentage = {result.rate[0] as number}
                                            size={80} color="#ad3f1d" 
                                            thickness={10} 
                                            duration={5000}
                                        />
                                        <Minus />
                                         <LoadingPercentage
                                            targetPercentage = {result.rate[1] as number}
                                            size={80} color="#e79898" 
                                            thickness={10} 
                                            duration={5000}/>
                            </div>
                               
                        </CardContent>
                            }

                            {
                            result.rate.length === 3 && 
                        <CardContent className="flex flex-col justify-center  text-white bg-gray-500 h-4/5 p-0   ">
                               
                                    <div className="flex flex-wrap content-center h-1/2">
                                        <p className="text-xl uppercase h-full w-1/4 flex flex-wrap content-center justify-center border-r border-neutral-400">{result.taxName[0].split('(')[1].split(')')[0]}</p>
                                        <div className="flex flex-wrap content-center justify-center w-3/4">
                                            <LoadingPercentage
                                            targetPercentage = {result.rate[0] as number}
                                            size={60} color="#28a745" 
                                            thickness={10} 
                                            duration={5000}
                                        />
                                        </div>
                                   </div>
                                   
                                <div className="flex flex-wrap content-center h-1/2 border-t border-neutral-400 ">
                                        <p className="text-xl uppercase h-full w-1/4 flex flex-wrap content-center justify-center border-r border-neutral-400 ">{result.taxName[1].split('(')[1].split(')')[0]}</p>
                                        <div className="flex flex-wrap space-x-2 content-center justify-center w-3/4">
                                            <LoadingPercentage
                                            targetPercentage = {result.rate[1] as number}
                                            size={60} color="#ad3f1d" 
                                            thickness={10} 
                                            duration={5000}
                                        />
                                        <Minus />
                                         <LoadingPercentage
                                            targetPercentage = {result.rate[2] as number}
                                            size={60} color="#e79898" 
                                            thickness={10} 
                                            duration={5000}
                                        />
                                        </div>
                                   </div>
                        </CardContent>
                            }
                            
                    </div>
                </Card> 

                <Card className={`${isCall ? 'translate-y-0' : 'translate-y-full'} transition duration-700 ease-in transform bg-neutral-700 border-zinc-500 rounded-none hover:border-2  hover:border-yellow-500 w-full h-[200px] p-0 mt-0 text-center`}>
                    <div className="h-full flex flex-col">
                        <CardHeader className="flex h-1/5 p-0 bg-green-800 pt-1 pl-2">
                            <CardTitle>
                                <div className="flex text-sm text-neutral-300 justify-start">
                                    <div className="flex flex-row items-center gap-2">
                                        <Plus className="text-green-600 bg-white rounded-full p-1 size-6" />
                                        <HoverCardDemo item= "Redevance additionnelle" />
                                    </div>
                                </div>
                            </CardTitle>
                        </CardHeader>
                   {
                    result.priceAdd ?
                        <CardContent className="flex justify-center flex-wrap content-center text-white bg-gray-500 h-4/5 p-0 ">
                            <div className="text-white ">
                                <div className=" flex space-x-2 items-center">
                                    <p className="text-2xl ">+{String(result.priceAdd).replace(...numberFormatRegex)}</p>
                                    <p className="">fcfa</p>
                                </div>
                               
                               <p className="text-xs">sur l'impôt</p>
                            </div>
                           
                        </CardContent>
                          :
                        <CardContent className="flex justify-center flex-wrap content-center text-white bg-gray-500 h-4/5 p-0 ">
                            <div className="text-white ">
                                <div className=" flex space-x-2 items-center">
                                    <p className="text-2xl ">0</p>
                                    <p className="">fcfa</p>
                                </div>
                               
                               <p className="text-xs">Pas de redevance pour cet impôt</p>
                            </div>
                           
                        </CardContent>
                         }
                    </div>
                </Card>
           
                <Card className={`${isCall ? 'translate-y-0' : 'translate-y-full'} transition duration-700 ease-in transform bg-neutral-700 rounded-none hover:border-2 hover:border-red-400 w-full h-[200px] p-0 mt-0 text-center`}>
                    <div className="h-full flex flex-col">
                        <CardHeader className="flex h-1/5 p-0 bg-green-800 pt-1 pl-2">
                            <CardTitle>
                                <div className="flex text-sm text-neutral-300 justify-start">
                                    <div className="flex flex-row items-center gap-1">
                                      <TriangleAlert className="text-green-600 bg-white p-0.5 rounded-full size-6" />
                                      <HoverCardDemo item ="Minimum de perception"  />
                                    </div>
                                </div>
                            </CardTitle>
                           
                        </CardHeader> 
                {result.minimum ?
                        <CardContent className=" flex justify-center flex-wrap content-center text-white bg-gray-500 h-4/5 p-0 ">
                            <div className="text-white ">
                                <div className=" flex space-x-2 items-center ">        
                                    <p className="text-2xl  ">{String(result.minimum).replace(...numberFormatRegex)}</p>
                                    <p  className="">fcfa</p>
                                </div>
                                <p className="text-xs">au moins</p>
                            </div>

                        </CardContent>
                        :
                        <CardContent className=" flex justify-center flex-wrap content-center text-white bg-gray-500 h-4/5 p-0 ">
                            <div className="text-white ">
                                <div className=" flex space-x-2 items-center">
                                    <p className="text-2xl ">0</p>
                                    <p  className="">fcfa</p>
                                </div>
                                <p className="text-xs">Pas de minimum de perception</p>
                            </div>

                        </CardContent>
                    }
                </div>
                 </Card> 
         </div>

        </div>
    )
}
