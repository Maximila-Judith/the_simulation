
import React, { useEffect } from 'react'
import styles from '@/app/wizard.module.css'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { HandCoins, Calculator, Coins, Percent, Plus, TriangleAlert, Equal, RotateCcw, Home, Save } from 'lucide-react'
import { taxCalcul } from '@/lib/functions/resultFonction';
import { useState } from 'react';
import { Button } from "@/components/ui/button"
import Link from 'next/link';
import { ResultMoreOption } from "@/components/ui/navBarResult"
import { Help } from './help';
import { Htax, ResultInterface } from "@/lib/type/type"
import { Exoneration } from './horsTax';
import { CalculMode } from "@/components/ui/calculMode"
import { ResultContext } from "@/lib/resultContext";
import LoadingPercentage from '@/components/ui/LoadingPercentage';
import AnimatedText from '@/components/ui/AnimatedText';
import { numberFormatRegex } from "@/lib/regex/numberRegex"
import { SaveForms } from '../ui/saveForms';
import { resultFind } from '@/lib/functions/resultFonction';

export interface ResultProps {
  tax: string;
  answers: { question: string; response: string[] }[]
}
interface Result {
    tax_name: string;
    tax_base: string;
    amount: string;
    rate: string;
    minimum: number;
    price_add: number;
    tax_price: string; 
}

interface UserData {
    email: string;
    name: string;
    result: Result;
}

export const Result: React.FC<ResultProps> = ({ tax, answers }) => {

  let price = [];
  const [isExoneration, setIsExoneration] = useState(false)
  const [amountTyping, setAmountTyping] = useState(false)
  const [callCalculmode, setCallCalculmode] = useState(false)
  const [saveForm, setSaveForm] = useState(false)

  
 let res : ResultInterface = {
    taxName: [""],
    taxBase: [""],
    amount: [0],
    rate: [0],
    minimum: 0 ,
    priceAdd: 0,
    taxPrice: [0]
    , exoneration: ""
  }
  res = resultFind(tax, answers)
  let dbRes: Result = {
    tax_name: res.taxName.join('&') ,
    tax_base: res.taxBase.join('&'),
    amount: res.amount.join('&'),
    rate: res.rate.join('&'),
    minimum: res.minimum as number,
    price_add: res.priceAdd as number,
    tax_price: res.taxPrice.join('&'), 
  } 


  const forExoneration = () => {
    setIsExoneration(true)
  }

  const backExoneration = () => {
    setIsExoneration(false)
  }

  function result(quest: string) {
    let obj = answers.find(answer => answer.question === quest)
    return obj ? obj.response : [""]
  }

  function forTypeTaxFinish() {
    setAmountTyping(true)
  }
  function forAmountFinisht() {
    setCallCalculmode(true)
  }

  const handleClick = () => {
    window.location.href = '/accueil';
  };
  const forAcceuil = () => {
    window.location.href = '/';
  };



  return (
    <div className=" lg:text-left w-screen overflow-hidden h-screen flex flex-wrap justify-center bg-blue-900 p-0 ">

        <div className=" flex space-x-0 bg-emerald-200  overflow-hidden  w-full text-white ">

          <div className='w-1/3'>
            <div className='bg-gray-300 h-full w-full'>
              <ResultContext.Provider value={res}>
                <div className='flex flex-col'>
                  <CalculMode isCall={callCalculmode} />
                </div>
              </ResultContext.Provider>
            </div>
          </div>

          <div className='w-2/3 h-svh  flex flex-col bg-cyan-800 space-y-10 p-10 pl-10'>

            <div className=' flex flex-rows justify-between  '>
              <div className='flex justify-end  h-auto '>
                <div className=' rounded-none  flex flex-wrap justify-start content-center w-full text-neutral-200'>
                  <div className='flex flex-col'>
                    <p className='text-3xl font-bold mt-20 pt-11'>Resultat de la simulation</p>
                  </div>
                </div>
              </div>

              <div className=' mt-0 mb-10 px-0 flex h-auto flex-rows items-center space-x-8 content-start pt-4 justify-center '>
                <Link href='' onClick={handleClick} className=" ">
                  <div className='flex gap-x-1 h-full flex-wrap content-center '>
                    <RotateCcw className='size-8 hover:text-green-300' />
                    {/* <p className=' text-center text-xl '>Refaire une autre simulation</p> */}
                  </div>
                </Link>
                <Link href='' className="  flex justify-end">
                  <div className='flex gap-x-1 h-full flex-wrap content-center '>
                    <SaveForms data = {dbRes} />
                  </div>
                </Link>
                <Link href='' onClick={forAcceuil} className="  flex justify-end">
                  <div className='flex gap-x-1 h-full flex-wrap content-center '>
                    <Home className='size-8 hover:text-green-300' />
                  </div>
                </Link>
              </div>
            </div>

            <div className='  py-10  h-3/5 space-y-20'>
              <div className=" w-full mb-5 flex rounded-none overflow-hidden flex-wrap content-center   ">
                <div className="flex  flex-row space-x-4 items-center h-full  rounded-none  ">
                  <div className=' flex space-x-0.5 h-full items-center flex-wrap content-start   '>
                    <p className='text-white font-semibold text-blue-500 flex text-2xl text-center'>Type d'impôt :</p>
                  </div>
                  {res.taxName.length < 2 ?
                    <div className='  h-full flex content-center '>
                      <p className='text-start text-xl '><AnimatedText text={res.taxName[0]} onEnd={forTypeTaxFinish} /></p>
                    </div>
                    :

                    <div className='  h-full flex content-center '>
                      <p className='text-start text-xl'><AnimatedText text={res.taxName[0] + ' et ' + res.taxName[1]} onEnd={forTypeTaxFinish} /></p>
                    </div>

                  }
                </div>



              </div>


              <div className=" w-full flex flex-rows space-x-4 items-center rounded-none overflow-hidden flex-wrap content-center   ">

                <div className="flex items-center h-full rounded-none">
                  <div className='  flex space-x-0.5 h-full items-center flex-wrap content-start   '>
                    <p className='text-white font-semibold text-blue-500 flex text-2xl text-center  '>Montant à payer :</p>
                  </div>
                </div>

                {res.taxPrice.length === 1 &&
                  <div className=" h-full flex flex-wrap content-center ">
                    <p className=" text-start text-xl font-medium ">
                      {amountTyping && <AnimatedText text={String(res.taxPrice[0]).replace(...numberFormatRegex) + ' fcfa'} onEnd={forAmountFinisht} />}
                    </p>
                  </div>
                }

                {res.taxPrice.length === 2 &&

                  <div className="h-2/3 flex flex-wrap content-center">
                    <p className="text-start text-xl font-medium space-x-4">
                      {amountTyping && <AnimatedText text={String(res.taxPrice[0]).replace(...numberFormatRegex) + ' fcfa à ' + String(res.taxPrice[1]).replace(...numberFormatRegex) + ' fcfa'} onEnd={forAmountFinisht} />}
                    </p>

                  </div>

                }

                {res.taxPrice.length === 3 &&

                  <div className="flex flex-col h-2/3 space-y-1 pt-2 flex-wrap content-start pl-2 ">
                    <div className=" h-full flex flex-wrap content-center ">
                      <p className=" text-start font-medium ">
                        {amountTyping && <AnimatedText text={String(res.taxPrice[0]).replace(...numberFormatRegex) + ' fcfa pour ' +
                          res.taxName[0].split('(')[1].split(')')[0] + ' et entre ' + String(res.taxPrice[1]).replace(...numberFormatRegex) +
                          ' et ' + String(res.taxPrice[2]).replace(...numberFormatRegex) + ' fcfa pour ' + res.taxName[1].split('(')[1].split(')')[0]
                        } onEnd={forAmountFinisht} />}
                      </p>
                    </div>
                  </div>


                }

              </div>




            </div>
            <div className=' h-1/4'>

            </div>

          </div>





        </div>
      
    </div>
  )
}
