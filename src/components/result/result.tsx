
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
import {HandCoins,Calculator,Coins,Percent, Plus,TriangleAlert,Equal,RotateCcw, Home} from 'lucide-react'
import { taxCalcul } from '@/lib/functions/taxCalcul';
import { useState } from 'react';
import { Button } from "@/components/ui/button"
import Link from 'next/link';
import { ResultMoreOption } from "@/components/ui/navBarResult"
import { Help } from './help';
import { Htax,ResultInterface} from "@/lib/type/type"
import { Exoneration } from './horsTax';
import { CalculMode } from "@/components/ui/calculMode"
import { ResultContext } from "@/lib/resultContext";
import LoadingPercentage from '@/components/ui/LoadingPercentage';
import AnimatedText from '@/components/ui/AnimatedText';
import { numberFormatRegex } from "@/lib/regex/numberRegex"

export interface ResultProps {
  tax: string;
  answers: { question: string; response: string[] }[]
}

export const Result: React.FC<ResultProps> = ({ tax, answers }) => {

  let price = [];
  const [isExoneration, setIsExoneration] = useState(false)
  let res:ResultInterface =  {
      taxName: [""],
      taxBase:[""],
      amount: [0],
      rate: [0],
      minimum: 0,
      priceAdd: 0,
      taxPrice: [0]
      , exoneration: "" 
      }

  const myData = localStorage.getItem('myData');

  switch (tax) {

    case "IS": {

      let profit = parseFloat(result('profit')[0])
      let otherProfit = parseFloat(result('otherProfit')[0])
      let amount = isNaN(profit) ? otherProfit : profit

      let cashable = parseFloat(result('cashable')[0])
      let companyType = result('entryCalcul')[0]
      let rate = (companyType === 'other') ? 30 : 25
      let nature = result('minimumCheck')[0]
      let minRate = (nature === 'realEstateCompany') ? 10 / 100 : (nature === 'btp') ? 3 / 100 : 1 / 100

      let liter = parseFloat(result('liter')[0])
      liter = isNaN(liter) ? 0 : liter
      let literMin = liter * 0.6
      let min = literMin === 0 && nature !== 'station' ? cashable * minRate : literMin
      min = min < 250000 ? 250000 : min
      let new_num = taxCalcul(amount, rate, min, 4000)
      price[0] = new_num ? new_num : 0
       res= {
         taxName: ["Impôt sur les sociétés"],
         taxBase:["Chiffre d'affaire"], 
         amount: [amount],
         rate: [rate],
         minimum: min,
         priceAdd: 4000,
         taxPrice: [price[0]],
         exoneration : 'is'
            }
          
     break;
    }
    
 case  "IBA&TFU": {
      //IBA
      let profit = parseFloat(result('profit')[0])
      let amount = isNaN(profit) ? 0 : profit
      let numIba = taxCalcul(amount, 30, 1.5, 4000)
      price[0] = numIba ? numIba : 0

      //TFU
      let built = parseFloat(result('builtProperties')[0])
      built = isNaN(built) ? 0 : built
      let undeveloped = parseFloat(result('undevelopedProperties')[0])
      undeveloped = isNaN(undeveloped) ? 0 : undeveloped

      let taxB = built !== 0 ?"Prix de propriété": undeveloped !== 0? "Prix de terrains": ""
      let amountTfu = built !== 0 ? built : undeveloped !== 0 ? undeveloped : 0
      let rate = built !== 0 ? [4, 8] : undeveloped !== 0 ? [3, 7] : [0]

      if (built !== 0) {
        let min = taxCalcul(built, 4, 0, 0)
        price[1] = min ? min : 0
        let max = taxCalcul(built, 8, 0, 0)
        price[2] = max ? max : 0

      } else if (undeveloped !== 0) {
        let min = taxCalcul(undeveloped, 3, 0, 0)
        price[1] = min ? min : 0
        let max = taxCalcul(undeveloped, 7, 0, 0)
        price[2] = max ? max : 0
      }
      
    res = {
      taxName: ["Impôt sur le Bénéfice d'Affaire (IBA)", "Taxe Foncière Unique (TFU)"],
      taxBase:["Le chiffre d'affaire réalisé", taxB],
      amount: [amount, amountTfu],
      rate: [30, rate[0], rate[1]],
      minimum: 0,
      priceAdd: 0,
        taxPrice: [price[0],price[1], price[2]]
        , exoneration: ''
      }
      break;
    }
   
  case  "IRF&TFU": {
      //IRF
      let amount = parseFloat(result('entryCalcul')[0])
      let landlordsExp = parseFloat(result('landlordsExpensesPrice')[0])
      landlordsExp = isNaN(landlordsExp) ? 0 : landlordsExp
      let realEstateExp = parseFloat(result('realEstateExpensesPrice')[0])
      realEstateExp = isNaN(realEstateExp) ? 0 : realEstateExp
      let rev = amount + landlordsExp - realEstateExp

      let new_num = taxCalcul(rev, 12, 0, 4000)
      price[0] = new_num ? new_num : 0

      //TFU
      let built = parseFloat(result('builtProperties')[0])
      built = isNaN(built) ? 0 : built
      let undeveloped = parseFloat(result('undevelopedProperties')[0])
      undeveloped = isNaN(undeveloped) ? 0 : undeveloped
      
      let taxB = built !== 0 ? "Prix de propriété" : undeveloped !== 0 ? "Prix de terrains" : ""
      let amountTfu = built !== 0 ? built : undeveloped !== 0 ? undeveloped : 0
      let rate = built !== 0 ? [4, 8] : undeveloped !== 0 ? [3, 7] : [0]

      if (built !== 0) {
        let min = taxCalcul(built, 4, 0, 0)
        price[1] = min ? min : 0
        let max = taxCalcul(built, 8, 0, 0)
        price[2] = max ? max : 0

      } else if (undeveloped !== 0) {
        let min = taxCalcul(undeveloped, 3, 0, 0)
        price[1] = min ? min : 0
        let max = taxCalcul(undeveloped, 7, 0, 0)
        price[2] = max ? max : 0
      }

   res = {
      taxName: ["Impôt sur les Revenus Fonciers (IRF)", "Taxe Foncière Unique (TFU)"],
      taxBase:["Les revenus fonctiers", taxB],
      amount: [rev, amountTfu],
      rate: [30, rate[0], rate[1]],
      minimum: 0,
      priceAdd: 0,
      taxPrice: [price[0],price[1], price[2]]
      , exoneration: ''  
  }
  break;
    }

     case  "IBA": {
      let profit = parseFloat(result('profit')[0])
      let otherProfit = parseFloat(result('otherProfit')[0])
      let amount = isNaN(profit) ? otherProfit : profit

      let cashable = parseFloat(result('cashable')[0])
      let companyType = result('entryCalcul')[0]
      let rate = (companyType === 'other') ? 30 : 25
      let nature = result('minimumCheck')[0]
      let minRate = (nature === 'realEstateCompany') ? 10 / 100 : (nature === 'btp') ? 3 / 100 : 1.5 / 100

      let liter = parseFloat(result('liter')[0])
      liter = isNaN(liter) ? 0 : liter
      let literMin = liter * 0.6
      let min
      if (literMin === 0 && nature !== 'station') {
        min = (cashable * minRate < 500000 || nature === "") ? 500000 : cashable * minRate
      } else {
        min = literMin < 250000 ? 250000 : literMin
      }

      let new_num = taxCalcul(amount, rate, min, 4000)
      price[0] = new_num ? new_num : 0
    
    res = {
        taxName: ["Impôt sur le Bénéfice d'Affaire (IBA)"],
        taxBase: ["Le bénéfice réalisé"],
      amount: [amount],
      rate: [rate],
      minimum: min,
      priceAdd: 4000,
      taxPrice: [price[0]]
      , exoneration: 'iba'  
  }
  break;
    }

      case  "TFU":{

      let built = parseFloat(result('builtProperties')[0])
          built = isNaN(built) ? 0 : built
      let undeveloped = parseFloat(result('undevelopedProperties')[0])
          undeveloped = isNaN(undeveloped) ? 0 : undeveloped
      let taxB = built !== 0 ?"Le prix de propriété": undeveloped !== 0? "Le prix de terrains": ""
      let amount = built !== 0 ? built : undeveloped !== 0 ? undeveloped : 0
      let rate = built !== 0 ? [4, 8] : undeveloped !== 0 ? [3, 7] : [0]

      if (built !== 0) {
        let min = taxCalcul(built, 4, 0, 0)
        price[0] = min ? min : 0
        let max = taxCalcul(built, 8, 0, 0)
        price[1] = max ? max : 0

      } else if (undeveloped !== 0) {
        let min = taxCalcul(undeveloped, 3, 0, 0)
        price[0] = min ? min : 0
        let max = taxCalcul(undeveloped, 7, 0, 0)
        price[1] = max ? max : 0
      }
 res = {
        taxName: ["Taxe Foncière Unique (TFU)"],
        taxBase:[taxB],
      amount: [amount],
      rate: rate,
      minimum: 0,
      priceAdd: 0,
      taxPrice: [price[0], price[1]]
      , exoneration: 'tfu' 
      }
  break;
    }

    case  "IRF": {
      let amount = parseFloat(result('entryCalcul')[0])
      let landlordsExp = parseFloat(result('landlordsExpensesPrice')[0])
      landlordsExp = isNaN(landlordsExp) ? 0 : landlordsExp
      let realEstateExp = parseFloat(result('realEstateExpensesPrice')[0])
      realEstateExp = isNaN(realEstateExp) ? 0 : realEstateExp
      let rev = amount + landlordsExp - realEstateExp

      let new_num = taxCalcul(rev, 12, 0, 4000)
      price[0] = new_num ? new_num : 0

   res = {
      taxName: ["Impôt sur les Revenus Fonciers (IRF)"],
      taxBase:["Les revenus fonctiers"],
      amount: [rev],
      rate: [12],
      minimum: 0,
      priceAdd: 4000,
      taxPrice: [price[0]]
      , exoneration: 'irf'  
      }
     break;
    }

      case "TPS" : {
      let ca = parseFloat(result('entryCalcul')[0])
        let new_num = taxCalcul(ca, 5, 10000, 4000) 
      price[0] = new_num ? new_num : 0
     res = {
      taxName: ["Taxe Professionnelle Synthétique (TPS)"],
      taxBase:["Le chiffre d'affaire"],
      amount: [ca],
      rate: [5],
      minimum: 10000,
      priceAdd: 4000,
      taxPrice: [price[0]]
       , exoneration: 'tps' 
       }
     break;
    }

      case "ITS" :{
    
      let salaryMonth = result('entryCalcul')[0]
      let fee = (salaryMonth === 'march') ? 1000 : (salaryMonth === 'june') ? 3000 : 0
      let sal = parseFloat(result('salary')[0])
      let rate = (sal <= 60000) ? 0 : (sal >= 60001 && sal <= 150000) ? 10 : (sal >= 150001 && sal <= 250000) ? 15 : (sal >= 250001 && sal <= 500000) ? 19 : (sal > 500000) ? 30 : 0

      let new_num = taxCalcul(sal, rate, 0, fee)
      price[0] = new_num ? new_num : 0

   res = {
      taxName: ["Impôt sur les Traitements et Salaire (ITS)"],
      taxBase:["Le salaire reçu"],
      amount: [sal],
      rate: [rate],
      minimum: 0,
      priceAdd: fee,
      taxPrice: [price[0]]
      , exoneration: 'its'  
  }
  break;
  
    }
  }

  
  const forExoneration = () => {   
    setIsExoneration(true)
  }

    const backExoneration = ()=> {
      setIsExoneration(false)
  }

  function result(quest: string) {
    let obj = answers.find(answer => answer.question === quest)
    return obj ? obj.response : [""]
  }

  const handleClick = () => {
    window.location.href = '/accueil';
  };
    const forAcceuil = () => {
        window.location.href = '/';
    };

  return (
    <div className=" lg:text-left w-screen overflow-hidden h-screen flex flex-wrap justify-center bg-black p-0 ">

      {( isExoneration) ?
        <div>
          {isExoneration && <Exoneration Click = {backExoneration} val= {res.exoneration} />}
        </div> :

        <div className=" flex space-x-0 bg-neutral-600  overflow-hidden p-8 pb-11 w-full   pt-0 pr-0 mb-0  text-white ">
          
          <div className='w-1/3'>
            <div className='bg-blue-300 h-full w-full'>
                <ResultContext.Provider value={res}>
                  <div className='flex flex-col'>
                    <CalculMode  />
                  </div>
                </ResultContext.Provider>
            </div>

  {/*           <div className=' flex justify-start flex-col '>
                <div className='flex justify-end h-8  '>
                  <div className=' rounded-es-xl  bg-neutral-600 flex flex-wrap justify-start content-center w-80 text-neutral-200'> <ResultMoreOption onExoneration={forExoneration} /></div>
                </div>

            <div className=' mt-0 flex gap-y-1 justify-end '>
              <div className='flex flex-col'>
                
              <Link href='' onClick={handleClick} className="  h-[25px] ">
                <Button variant="secondary" className=" rounded-es-xl h-full bg-neutral-600 text-yellow-400 hover:bg-neutral-900 hover:text-white rounded-se-none rounded-ee-none rounded-ss-none">
                  <div className='flex gap-x-1 h-full flex-wrap content-center '>
                    <RotateCcw className='size-4' />
                    <p className=' text-center text-xs'>Faire une autre simulation</p>
                  </div>
                </Button>
                </Link>
                <Link href='' onClick={forAcceuil} className="  h-[25px] flex justify-end">
                <Button variant="secondary" className="rounded-es-xl h-full bg-neutral-600 text-neutral-400 hover:bg-neutral-900 hover:text-white rounded-se-none rounded-ee-none rounded-ss-none ">
                  <div className='flex gap-x-1 h-full flex-wrap content-center '>
                    <Home className='size-4' />
                    <p className=' text-center text-xs'>Accueil</p>
                  </div>
                </Button>
              </Link>
              </div>
            </div>
          </div>
          <div className='pr-8 '>

            

                </div> */}

            </div>

          <div className='w-2/3 h-svh  flex flex-col bg-emerald-300 p-10'>

            <div className=' flex justify-end  h-1/5 bg-purple-500 '>
                <div className='flex justify-end  h-auto w-2/3 bg-amber-300  '>
                <div className=' rounded-none  bg-sky-400 flex flex-wrap justify-start content-center w-full text-neutral-200'>
                  <div className='flex flex-col'>
                    <p className='text-4xl '>Resultat</p>
                    <p className='text-4xl  pl-11'>de la simulation</p>
                  </div>
                </div>
                </div>

                <div className=' mt-0 px-0 flex gap-x-3 w-1/3 h-auto bg-red-400 flex-wrap  content-center justify-center '>
              
                <Link href='' onClick={handleClick} className=" bg-sky-400  ">
                  <Button variant="secondary" className=" rounded-none  bg-neutral-600 text-yellow-400 hover:bg-neutral-900 hover:text-white ">
                    <div className='flex gap-x-1 h-full flex-wrap content-center '>
                      <RotateCcw className='size-4' />
                      <p className=' text-center text-xs'>Refaire une simulation</p>
                    </div>
                  </Button>
                  </Link>
                  <Link href='' onClick={forAcceuil} className="  flex justify-end">
                  <Button variant="secondary" className=" h-full bg-neutral-600 text-neutral-400 hover:bg-neutral-900 hover:text-white rounded-full ">
                    <div className='flex gap-x-1 h-full flex-wrap content-center '>
                      <Home className='size-4' />
                    </div>
                  </Button>
                </Link>
                </div>
            </div>
            
            <div className=' bg-lime-500 h-4/5'>

              <div className=" h-1/2 w-full flex flex-col rounded-none overflow-hidden  bg-neutral-700 ">
                    
                    <div className="flex  items-center h-1/3 w-1/2 rounded-none mt-2 border-blue-900  bg-neutral-500">
                        <div className=' flex space-x-0.5 h-full items-center   '>
                            <p className='text-white  flex text-3xl text-center'>Type d'impôt </p>
                        </div>
                    </div>
                    
                        {res.taxName.length < 2 ?
                        <div className=' bg-blue-300 h-2/3 flex flex-wrap content-center '>
                            <p className='text-start text-5xl '>{res.taxName}</p>
                        </div>
                        :
                        
                            <ul className=' bg-blue-300 h-2/3 flex flex-col space-y-4 pt-4 justify-start '>
                            <li className=' flex space-x-3 flex-wrap content-center '>
                                <span className="flex h-2 w-2 translate-y-1 items-center rounded-full bg-lime-600" />
                                <p className='text-start text-2xl '>{res.taxName[0]}</p>
                            </li>
                            <li className='flex space-x-3 flex-wrap content-center '>
                                <span className="flex h-2 w-2 translate-y-1 items-center rounded-full bg-amber-600" />
                                <p className='text-start text-2xl '>{res.taxName[1]}</p>
                            </li>
                            </ul>
                        }

              </div> 
            

              <div className=" h-1/2 w-full flex flex-col rounded-none overflow-hidden  bg-neutral-500 ">
                    
                    <div className="flex  items-center h-1/3 w-1/2 rounded-none mt-2 border-blue-900  bg-neutral-500">
                        <div className=' flex space-x-0.5 h-full items-center   '>
                            <p className='text-white  flex text-3xl text-center '>Montant à payer </p>
                        </div>
                    </div>
                    
                        {res.taxPrice.length ===1 &&
                <div className="bg-blue-300 h-2/3 flex flex-wrap content-center ">
                    <p className=" text-start text-4xl ">
                        {String(res.taxPrice[0]).replace(...numberFormatRegex)} fcfa
                    </p>
                </div>
                }
                    
                {res.taxPrice.length ===2 &&
                  
                    <div className="bg-blue-300 h-2/3 flex flex-wrap content-center">
                        <p className="text-start text-4xl space-x-4">
                            {String(res.taxPrice[0]).replace(...numberFormatRegex)} fcfa 
                            à {String(res.taxPrice[1]).replace(...numberFormatRegex)} fcfa
                        </p>
                    </div>
                        
                
                }
                
                        
                {res.taxPrice.length === 3 &&
                  
                    <div className="flex flex-col h-2/3 space-y-1 pt-2 flex-wrap content-start pl-2 ">
                        <div className="text-xsd flex items-start gap-x-1">
                            <p className="text-lime-300">{res.taxName[0].split('(')[1].split(')')[0]} :</p>
                            <p>{String(res.taxPrice[0]).replace(...numberFormatRegex)} fcfa</p>
                        </div>

                        <div className="text-xs flex items-start gap-x-1">
                            <p className="text-amber-400">{res.taxName[1].split('(')[1].split(')')[0]} :</p>
                            <div className="flex space-x-1">
                                <p>entre </p>
                               <p>{String(res.taxPrice[1]).replace(...numberFormatRegex)} </p>
                               <p>et</p>
                               <p>{String(res.taxPrice[2]).replace(...numberFormatRegex)} fcfa</p>
                            </div>
                        </div>
                    </div>
                        
                
                }

                </div> 




            </div>
            <div className='bg-orange-500 h-1/6'>

            </div>

      </div>
              


        

              </div>
      }
    </div>
  )
}
