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

export const CalculMode = () => {
    const result = useContext(ResultContext)


    return (
        <div className="flex flex-col space-y-4 opacity-100 justify-center  pt-0">

                <div className="space-y- pt-0 h-20 w-72  rounded-ee-xl rounded-ss-3xl overflow-hidden border-l bg-neutral-800 border-r border-b border-teal-800">
                    
                    <div className="pl-2 flex space-x-0.5 items-center h-1/3 w-1/2 rounded-ee-xl border-t border-l border-blue-900  bg-neutral-600">
                        <div className=' flex space-x-0.5 h-full text-xs items-center  '>
                            <div className=''>
                                <Home className="size-4 text-neutral-400"/>
                                </div>
                            <div className='flex space-x-1'>
                            <p className='text-white  flex text-xs'>Type d'impôt </p>
                            </div>
                        </div>
                    </div>
                    
                        {result.taxName.length < 2 ?
                        <div className=' pt-3'>
                            <p className='text-center '>{result.taxName}</p>
                        </div>
                        :
                        
                            <ul className=' space-y-1 text-xs pt-3 pl-2'>
                            <li className=' flex space-x-1 '>
                                <span className="flex h-2 w-2 translate-y-1 items-center rounded-full bg-lime-600" />
                                <p className='text-xs'>{result.taxName[0]}</p>
                            </li>
                            <li className='flex space-x-1 '>
                                <span className="flex h-2 w-2 translate-y-1 items-center rounded-full bg-amber-600" />
                                <p className='text-xs'>{result.taxName[1]}</p>
                            </li>
                            </ul>
                        }

                </div>

            <Card className=" pt-0 pb-5 text-white  text-xs  flex flex-col space-y-2 rounded-2xl rounded-ss-2xl overflow-hidden bg-teal-900 border-none  ">
                                   
               <div className='flex  justify-start border-e flex-wrap content-center items-center  space-x-1 pl-0 mb-5  bg-teal-700 w-72 h-20 rounded-ee-xl '>
               
               <div className=" pt-0 h-full w-full">
                <div className="pl-2  flex space-x-0.5 items-center h-1/3 w-1/2 rounded-ee-xl border-t border-lime-700  bg-teal-800">
                  <HandCoins className="size-5 text-teal-500" />
                  <p className=' text-xs'>Montant à payer</p>
                </div>
                {result.taxPrice.length ===1 &&
                <div className="flex space-x-1 pl-1  h-2/3 flex-wrap content-center text-lg  ">
                    <p className=" flex gap-x-1 w-full justify-center  items-start flex-wrap content-center">
                        <span className="flex h-2 w-2 translate-y-1 items-center rounded-full bg-cyan-500" />
                        {String(result.taxPrice[0]).replace(...numberFormatRegex)} fcfa
                    </p>
                </div>
                }
                    
                {result.taxPrice.length ===2 &&
                  
                    <div className="flex space-x-2 pl-2 items-end h-2/3 flex-wrap content-center ">
                        <p className="text-sm flex items-start gap-x-1">
                            <span className="flex h-2 w-2 translate-y-1 items-center rounded-full bg-cyan-500" />
                            {String(result.taxPrice[0]).replace(...numberFormatRegex)} fcfa
                        </p>
                        <p className="0.5">à</p>
                        <p className="text-sm flex items-start gap-x-1">
                            <span className="flex h-2 w-2 translate-y-1 items-center rounded-full bg-lime-600" />
                            {String(result.taxPrice[1]).replace(...numberFormatRegex)} fcfa
                        </p>
                    </div>
                        
                
                }
                
                        
                {result.taxPrice.length === 3 &&
                  
                    <div className="flex flex-col h-2/3 space-y-1 pt-2 flex-wrap content-start pl-2 ">
                        <div className="text-xsd flex items-start gap-x-1">
                            <p className="text-lime-300">{result.taxName[0].split('(')[1].split(')')[0]} :</p>
                            <p>{String(result.taxPrice[0]).replace(...numberFormatRegex)} fcfa</p>
                        </div>

                        <div className="text-xs flex items-start gap-x-1">
                            <p className="text-amber-400">{result.taxName[1].split('(')[1].split(')')[0]} :</p>
                            <div className="flex space-x-1">
                                <p>entre </p>
                               <p>{String(result.taxPrice[1]).replace(...numberFormatRegex)} </p>
                               <p>et</p>
                               <p>{String(result.taxPrice[2]).replace(...numberFormatRegex)} fcfa</p>
                            </div>
                        </div>
                    </div>
                        
                
                }
                
               </div>
                    
               </div>
           
                {result.taxBase.length === 1 &&
                <div className="pl-4 pt-5 text-neutral-400">
                    <div className='flex gap-x-1 p-1.5 pl-0  '>
                        <p className=''>. {result.taxBase[0]} =</p>
                        <p className='font-medium '>{String(result.amount[0]).replace(...numberFormatRegex)} fcfa</p>
                    </div>
                </div>}
                { result.taxBase.length ===2 &&
                <div className="pl-4 pt-3 text-neutral-400 ">
                    <div className='flex gap-x-1 p-1.5 pl-0 bpb-0 '>
                        <p className=''>. {result.taxBase[0]} =</p>
                        <p className='font-medium '>{String(result.amount[0]).replace(...numberFormatRegex)} fcfa</p>
                    </div>
                    <div className='flex gap-x-1 pl-0 '>
                        <p className=''>. {result.taxBase[1]} =</p>
                        <p className='font-medium '>{String(result.amount[1]).replace(...numberFormatRegex)} fcfa</p>
                    </div>
                </div>
                }
                
                <div className=" sm:flex gap-2 p-2 gap-y-2 justify-between  lg:h-[160px]">
                <Card className="bg-neutral-700 border-zinc-500  hover:border-lime-400 w-60 p-1 pt-2 mt-0 text-start ">
                    <div className="h-25 flex flex-col space-y-10  pl-0">
                        <CardHeader className="flex flex-col space-y-0 h-auto pb-2  pl-1 pt-0">
                            <CardTitle>
                                <div className="flex justify-between text-sm text-neutral-300 ">
                                    <div className="flex flex-row items-center gap-2">
                                        <Percent className="text-lime-400 " />
                                        <HoverCardDemo item = "Pourcentage appliqué" />
                                    </div>
                                </div>
                            </CardTitle>
                        </CardHeader>
                        
                            {result.rate.length === 1 &&
                        <CardContent className="flex flex-col pb-0 text-white pl-1 ">
                            <div className="">
                                <p className="text-2xl">{String(result.rate[0])}</p>
                                <p className="text-xs  lowercase">sur {result.taxBase[0]}</p>
                            </div>
                        </CardContent>}
                            {
                            result.rate.length === 2 &&
                        <CardContent className="flex flex-col pb-0 text-white pl-1 ">
                            <div className="flex space-x-3 items-end ">
                               <p className="text-2xl "> {String(result.rate[0])} </p>
                               <p className="text-x pb-0.5">à</p>
                               <p className="text-2xl" >{String(result.rate[1])}</p>
                            </div>
                                <p className="text-xs lowercase pt-0.5" >sur {result.taxBase[0] }</p>
                        </CardContent>
                            }

                            {
                            result.rate.length === 3 && 
                        <CardContent className="flex flex-col pb-0 text-white pl-1  ">
                            <div className="flex space-x-1 items-end">
                               <p className="text-xl">{String(result.rate[0])}</p>
                               <p className="text-xs lowercase pb-1">sur {result.taxBase[0] }</p>
                            </div>
                          <div className="">
                            <div className="flex space-x-1.5 ">
                               <p className="text-xl">{String(result.rate[1])}</p>
                               <p className="text-xs pt-2">à</p>
                               <div className=" flex space-x-1 items-end">
                                    <p className="text-xl pl-1">{String(result.rate[2])}</p>
                                    <p className="text-xs pb-1 lowercase" >sur {result.taxBase[1] }</p>
                               </div>
                            </div>
                           </div>
                        </CardContent>
                            }
                            


                    </div>
                </Card> 

                <Card className=" bg-neutral-800  hover:border-yellow-500 border-zinc-500 w-60 p-1 pt-2 mt-0 text-start">
                    <div className="h-40 flex flex-col space-y-10  pl-0">
                        <CardHeader className="flex flex-col space-y-0 h-auto pb-2  pl-1 pt-0">
                            <CardTitle>
                                <div className="flex justify-between text-sm text-neutral-300">
                                    <div className="flex flex-row items-center gap-2">
                                        <Plus className="text-yellow-500" />
                                        <HoverCardDemo item= "Redevance additionnelle" />
                                    </div>
                                </div>
                            </CardTitle>
                        </CardHeader>
                   {
                    result.priceAdd ?
                        <CardContent className="flex flex-col pb-0 text-white pl-1">
                            <div className="text-white ">
                                <div className=" flex space-x-2 items-end">
                                    <p className="text-2xl ">+{String(result.priceAdd).replace(...numberFormatRegex)}</p>
                                    <p className="pb-1.5">fcfa</p>
                                </div>
                               
                               <p className="text-xs">sur l'impôt</p>
                            </div>
                           
                        </CardContent>
                          :
                        <CardContent className="flex flex-col pb-0 text-white pl-1">
                            <div className="text-white ">
                                <div className=" flex space-x-2 items-end">
                                    <p className="text-2xl ">0</p>
                                    <p className="pb-1.5">fcfa</p>
                                </div>
                               
                               <p className="text-xs">Pas de redevance pour cet impôt</p>
                            </div>
                           
                        </CardContent>
                         }
                    </div>
                </Card>
           
                   
                 <Card className=" bg-slate-900  border-zinc-500  hover:border-red-400 w-60 p-1 pt-2 mt-0 text-start">
                    <div className="h-40 flex flex-col space-y-10  pl-0">
                        <CardHeader className="flex flex-col space-y-0 h-auto pb-2  pl-1 pt-0">
                            <CardTitle>
                                <div className="flex justify-between text-sm text-neutral-300">
                                    <div className="flex flex-row items-center gap-2">
                                      <TriangleAlert className="text-red-400" />
                                      <HoverCardDemo item ="Minimum de perception"  />
                                    </div>
                                </div>
                            </CardTitle>
                           
                        </CardHeader> 
                {result.minimum ?
                        <CardContent className=" flex flex-col pb-0 text-white pl-1">
                            <div className="text-white ">
                                <div className=" flex space-x-2 items-end ">
                                    <p className="text-2xl  ">{String(result.minimum).replace(...numberFormatRegex)}</p>
                                    <p  className="pb-1.5">fcfa</p>
                                </div>
                                <p className="text-xs">au moins</p>
                            </div>

                        </CardContent>
                        :
                        <CardContent className=" flex flex-col pb-0 text-white pl-1">
                            <div className="text-white ">
                                <div className=" flex space-x-2 items-end">
                                    <p className="text-2xl ">0</p>
                                    <p  className="pb-1.5">fcfa</p>
                                </div>
                                <p className="text-xs">Pas de minimum de perception</p>
                            </div>

                        </CardContent>
                    }
              </div>
                 </Card>
                 </div>
            
            </Card>
        </div>
    )
}
