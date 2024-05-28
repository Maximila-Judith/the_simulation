import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Plus, TriangleAlert,Coins, Percent,Home, HandCoins } from "lucide-react";
import React from 'react';
import{useContext} from 'react'
import { HoverCardDemo } from "./hoverCardDemo"
import { ResultContext } from "@/lib/resultContext";
import { numberFormatRegex } from "@/lib/regex/numberRegex"
import Image from 'next/image';
import LoadingPercentage from '@/components/ui/circlePercent';

export const CalculMode = () => {
    const result = useContext(ResultContext)


    return (
        <div className="flex opacity-100 justify-center bg-slate-50 m-0 h-full w-full ">

         <div className=" flex flex-col space-y-4 bg-slate-600 w-4/5 p-4">
            
                <Card className="bg-neutral-700 border-zinc-500 rounded-none  hover:border-lime-400 w-full h-[200px] p-0 mt-0 text-center ">
                    <div className=" h-full flex flex-col ">
                        <CardHeader className="flex h-1/5 p-0 bg-purple-500 pt-1 pl-2">
                            <CardTitle>
                                <div className="flex text-sm text-neutral-300 justify-start">
                                    <div className="flex flex-row items-center gap-2 ">
                                        <Percent className="text-lime-400 bg-neutral-800 rounded-full p-1 size-8 " />
                                        <HoverCardDemo item = "Pourcentage appliqué" />
                                    </div>
                                </div>
                            </CardTitle>
                        </CardHeader>
                        
                            {result.rate.length === 1 &&
                        <CardContent className="flex justify-center flex-wrap content-center text-white bg-slate-500 h-4/5 p-0  ">
                            <div className="">
                               <LoadingPercentage
                                    targetPercentage = {result.rate[0] as number} 
                                    size={120} color="#28a745" 
                                    thickness={10} 
                                />

                              {/*   <p className="text-2xl">{String(result.rate[0])}</p>
                                <p className="text-xs  lowercase">sur {result.taxBase[0]}</p> */}
                            </div>
                        </CardContent>}
                            {
                            result.rate.length === 2 &&
                        <CardContent className="flex justify-center flex-wrap content-center text-white bg-slate-500 h-4/5 p-0  ">
                            <div className="flex space-x-3 items-center  ">
                               <p className="text-2xl ">{String(result.rate[0])}</p>
                               <p className="text-x ">à</p>
                               <p className="text-2xl" >{String(result.rate[1])}</p> 
                               <p className="text-xs lowercase " >sur {result.taxBase[0] }</p>
                            </div>
                               
                        </CardContent>
                            }

                            {
                            result.rate.length === 3 && 
                        <CardContent className="flex justify-center flex-wrap content-center text-white bg-slate-500 h-4/5 p-0   ">
                            <div className="flex space-x-1 items-center">
                               <p className="text-xl">{String(result.rate[0])}</p>
                               <p className="text-xs lowercase ">sur {result.taxBase[0] }</p>
                            </div>
                          <div className="">
                            <div className="flex space-x-1 items-center">
                               <p className="text-xl">{String(result.rate[1])}</p>
                               <p className="text-xs pl-1">à</p>
                               <div className=" flex space-x-1 items-center">
                                    <p className="text-xl pl-1">{String(result.rate[2])}</p>
                                    <p className="text-xs  lowercase" >sur {result.taxBase[1] }</p>
                               </div>
                            </div>
                           </div>
                        </CardContent>
                            }
                            
                    </div>
                </Card> 

                <Card className=" bg-neutral-800  hover:border-yellow-500 rounded-none border-zinc-500 w-full h-[200px] p-0 mt-0 text-center ">
                    <div className="h-full flex flex-col">
                        <CardHeader className="flex h-1/5 p-0 bg-purple-500 pt-1 pl-2">
                            <CardTitle>
                                <div className="flex text-sm text-neutral-300 justify-start">
                                    <div className="flex flex-row items-center gap-2">
                                        <Plus className="text-yellow-500 bg-neutral-700 rounded-full p-1 size-8" />
                                        <HoverCardDemo item= "Redevance additionnelle" />
                                    </div>
                                </div>
                            </CardTitle>
                        </CardHeader>
                   {
                    result.priceAdd ?
                        <CardContent className="flex justify-center flex-wrap content-center text-white bg-slate-500 h-4/5 p-0 ">
                            <div className="text-white ">
                                <div className=" flex space-x-2 items-center">
                                    <p className="text-2xl ">+{String(result.priceAdd).replace(...numberFormatRegex)}</p>
                                    <p className="">fcfa</p>
                                </div>
                               
                               <p className="text-xs">sur l'impôt</p>
                            </div>
                           
                        </CardContent>
                          :
                        <CardContent className="flex justify-center flex-wrap content-center text-white bg-slate-500 h-4/5 p-0 ">
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
           
                 <Card className=" bg-slate-900  border-zinc-500  rounded-none hover:border-red-400 w-full h-[200px] p-0 mt-0 text-center ">
                    <div className="h-full flex flex-col">
                        <CardHeader className="flex h-1/5 p-0 bg-purple-500 pt-1 pl-2">
                            <CardTitle>
                                <div className="flex text-sm text-neutral-300 justify-start">
                                    <div className="flex flex-row items-center gap-2">
                                      <TriangleAlert className="text-red-400 bg-neutral-700 rounded-full p-1 size-8" />
                                      <HoverCardDemo item ="Minimum de perception"  />
                                    </div>
                                </div>
                            </CardTitle>
                           
                        </CardHeader> 
                {result.minimum ?
                        <CardContent className=" flex justify-center flex-wrap content-center text-white bg-cyan-500 h-4/5 p-0 ">
                            <div className="text-white ">
                                <div className=" flex space-x-2 items-center ">        
                                    <p className="text-2xl  ">{String(result.minimum).replace(...numberFormatRegex)}</p>
                                    <p  className="">fcfa</p>
                                </div>
                                <p className="text-xs">au moins</p>
                            </div>

                        </CardContent>
                        :
                        <CardContent className=" flex justify-center flex-wrap content-center text-white bg-slate-500 h-4/5 p-0 ">
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
