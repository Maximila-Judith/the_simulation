
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
import { CalculMode } from "@/components/ui/calculMode"
import { ResultContext } from "@/lib/resultContext";
import AnimatedText from '@/components/ui/AnimatedText';
import { numberFormatRegex } from "@/lib/regex/numberRegex"
import { SaveForms } from '../ui/saveForms';
import { findResult } from '@/lib/functions/resultFonction';

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


  let res: ResultInterface = {
    taxName: [""],
    taxBase: [""],
    amount: [0],
    rate: [0],
    minimum: 0,
    priceAdd: 0,
    taxPrice: [0]
    , exoneration: ""
  }
  res = findResult(tax, answers)
  let dbRes: Result = {
    tax_name: res.taxName.join('&'),
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
    <div className=" lg:text-left w-screen overflow-hidden h-screen flex flex-wrap justify-center bg-blue-900 p-0">

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

        <div className='w-2/3  flex flex-col bg-cyan-800 space-y-10 p-10 pt-10 pl-5 pr-4'>

          <div className=' flex flex-col space-y-20 h-1/4 '>

            <div >
              {/* <Link href='' onClick={handleClick} className=" bg-cyan-600 p-3">
                <p className=' text-center text-sm hover:text-neutral-400'>Refaire une autre simulation</p>
              </Link> */}
              {/*                 <Link href='' className="  flex justify-end">
                  <div className='flex gap-x-1 h-full flex-wrap content-center '>
                    <SaveForms data = {dbRes} />
                  </div>
                </Link> */}
              {/* <Link href='' onClick={forAcceuil} className="  flex justify-end">
                <p className=' text-center text-sm hover:text-neutral-400'>Aller à la page d'accueil</p>
              </Link> */}
            </div>
            <div className='flex justify-end  '>
              <div className=' rounded-none  flex flex-wrap justify-start content-center w-full text-neutral-300'>
                <div className='flex flex-col'>
                  <p className='text-4xl font-bold '>Resultat de la simulation</p>
                </div>
              </div>
            </div>
          </div>

          <div className='flex flex-col items-center space-y-5 content-center '>
            <div className="flex w-full flex-col rounded-none overflow-hidden justify-start">
              <div className=' flex flex-row space-x-5 h-full items-center content-end w-full '>
                <p className='text-neutral-300 flex text-2xl text-center p-2 pl-0'>✔ Type d'impôt : </p>
                <div>
                  {res.taxName.length < 2 ?
                    <div className='  h-full flex flex-wrap content-center'>
                      <p className=' text-start text-xl'><AnimatedText text={res.taxName[0]} onEnd={forTypeTaxFinish} /></p>
                    </div>
                    :

                    <div className='  h-full flex flex-wrap content-center'>
                      <p className=' text-xl'><AnimatedText text={res.taxName[0] + ' et ' + res.taxName[1]} onEnd={forTypeTaxFinish} /></p>
                    </div>
                  }
                </div>
              </div>
            </div>

            <div className=" w-full flex flex-col rounded-none overflow-hidden justify-start">
              <div className="flex items-center rounded-none">
                <div className='justify-start flex flex-row space-x-5 items-center content-end w-full'>
                  <p className='text-neutral-300 flex text-2xl text-center w-[250px] p-2 pl-0'>✔ Montant à payer : </p>
                  <div>
                    {res.taxPrice.length === 1 &&
                      <div className=" h-full flex flex-wrap content-center">
                        <p className=" text-start text-xl ">
                          {amountTyping && <AnimatedText text={String(res.taxPrice[0]).replace(...numberFormatRegex) + ' fcfa'} onEnd={forAmountFinisht} />}
                        </p>
                      </div>
                    }

                    {res.taxPrice.length === 2 &&

                      <div className="h-2/3 flex flex-wrap content-center">
                        <p className="text-start text-xl  space-x-4">
                          {amountTyping && <AnimatedText text={String(res.taxPrice[0]).replace(...numberFormatRegex) + ' fcfa à ' + String(res.taxPrice[1]).replace(...numberFormatRegex) + ' fcfa'} onEnd={forAmountFinisht} />}
                        </p>

                      </div>

                    }

                    {res.taxPrice.length === 3 &&

                      <div className="flex flex-col h-2/3 flex-wrap content-start  ">
                        <div className=" h-full flex flex-wrap content-center ">
                          <p className=" text-start  text-xl">
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
              </div>
            </div>
          </div>
          <div className='px-0 flex h-auto flex-rows items-center space-x-4 content-start justify-end'>
            <Link href='' onClick={handleClick} className=" bg-cyan-600 p-3">
              <p className=' text-center text-sm hover:text-neutral-400'>Refaire une autre simulation</p>
            </Link>
            <Link href='' onClick={forAcceuil} className="  flex justify-end">
              <p className=' text-center text-sm hover:text-neutral-400'>Aller à la page d'accueil</p>
            </Link>
          </div>
        </div>





      </div>

    </div>
  )
}
