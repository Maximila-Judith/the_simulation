
import React from 'react'
import styles from '@/app/wizard.module.css'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {HandCoins,Calculator,Coins,Percent, Plus,TriangleAlert,Equal,RotateCcw} from 'lucide-react'
import { taxCalcul } from '@/lib/functions/taxCalcul';
import { useState } from 'react';
import { Button } from "@/components/ui/button"
import Link from 'next/link';
import Image from 'next/image';
import { numberFormatRegex } from "@/lib/regex/numberRegex"
import { RadioGroup } from '@radix-ui/react-menubar';
import { ResultMoreOption } from "@/components/ui/navBarResult"
import { Help } from './help';
import { Htax} from "@/lib/type/type"
import {HorsTax} from './horsTax'
import { valHT } from './horsTax/globalHorsTax';



export interface ResultProps {
  tax: string;
  answers: { question: string; response: string[] }[]
}

export const Result: React.FC<ResultProps> = ({ tax, answers }) => {
  let res = {
      taxName: [""],
      taxBase: [""],
      amount: [0],
      rate: [0],
      minimum: 0,
      priceAdd: 0,
      taxPrice: [""],
      hTax: ""
  }
  let price = [];
  const [horsTax, setHorsTax] = useState<Htax>()
  const [help, setHelp] = useState(false)


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
       res = {
         taxName: ["Impôt sur les sociétés"],
         taxBase:["Le chiffre d'affaire réalisé"], 
         amount: [amount],
         rate: [rate],
         minimum: min,
         priceAdd: 4000,
         taxPrice: [String(price[0]).replace(...numberFormatRegex) + ' Fcfa'],
         hTax : 'is'
            }

      break;
    }
    case "IBA&TFU": {
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
        taxPrice: ['IBA : ' + String(price[0]).replace(...numberFormatRegex) + ' Fcfa ' , 'TFU : entre ' +String(price[1]).replace(...numberFormatRegex) + ' Fcfa et '+ String(price[2]).replace(...numberFormatRegex) + ' Fcfa']
        , hTax: ''
      }
      break;
    }
    case "IRF&TFU": {
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
      taxPrice: ['IRF : ' + String(price[0]).replace(...numberFormatRegex) + ' Fcfa ', 'TFU : entre ' +String(price[1]).replace(...numberFormatRegex) + ' Fcfa et '+ String(price[2]).replace(...numberFormatRegex) + ' Fcfa']
      , hTax: ''  
      }
      break;
    }
    case "IBA": {
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
      taxPrice: [String(price[0]).replace(...numberFormatRegex) + ' Fcfa']
      , hTax: 'iba'  
      }
      break;
    }

    case "TFU": {

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
      taxPrice: ['Entre ' +String(price[0]).replace(...numberFormatRegex) + ' Fcfa et '+ String(price[1]).replace(...numberFormatRegex) + ' Fcfa']
      , hTax: 'tfu' 
      }
      break;
    }

    case "IRF": {
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
      taxPrice: [String(price[0]).replace(...numberFormatRegex) + ' Fcfa']
      , hTax: 'irf'  
      }
      break;
    }

    case "TPS": {
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
      taxPrice: [String(price[0]).replace(...numberFormatRegex) + ' Fcfa']
       , hTax: 'tps' 
       }
      break;
    }

    case "ITS": {
    
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
      taxPrice: [String(price[0]).replace(...numberFormatRegex) + ' Fcfa']
      , hTax: 'its'  
      }
      break;
    }
  }

  const valH = (res.hTax) ? valHT.find(ht => ht.id === res.hTax) : undefined

  const forHelp = ()=> {
    setHelp(true)
  }
    const backHelp = ()=> {
    setHelp(false)
  }
  
  const forHorsTax = ()=> {
    setHorsTax(valH)
  }
    const backHorsTax = ()=> {
    setHorsTax(undefined)
  }

  function result(quest: string) {
    let obj = answers.find(answer => answer.question === quest)
    return obj ? obj.response : [""]
  }

  const handleClick = () => {
    window.location.href = '/accueil';
  };


  return (
    <div className=" lg:text-left">

      {(help || horsTax) ?
        <div>
          {help && <Help onClick = {backHelp} />}
          {horsTax && <HorsTax Click = {backHorsTax} />}
        </div> :
        <Card className={styles.result}>
          <div className=' flex flex-col space-y-1'>
            <div className='flex justify-center h-8 pt-1 mb-2 rounded-t-md bg-slate-200'>
              <p className='text-gray-900 text-center text-x'>Résultat de la simulation</p>
            </div>
            <div className='flex flex-col space-y-3.5 pt-1 pb-1 ml-3 text-sm'>
              <div className='flex gap-x-1 h-5'>
                <Image
                  src="/financier.png"
                  alt="icon 1"
                  width={23}
                  height={25}
                  priority
                />
                            
                {res.taxName.length < 2 ?
                  <div className='flex space-x-1 text-xs pt-1'>
                    <p className='text-blue-800 pt-0.5 flex'>Type d'impôt :</p> <p className=' pt-0.5'>{res.taxName}</p>
                  </div>
                  :
                  <div className=' flex gap-x-5 h-full '>
                    <div className='flex space-x-1'>
                      <p className='text-blue-800 pt-0.5  flex'>Impôts à payer :</p>
                    </div>
                    <ul className='pb-8 pt-0.5 space-y-0.5'>
                      <li className=' flex gap-x-1'>
                        <span className="flex h-2 w-2 translate-y-1 rounded-full bg-green-500" />
                        <p className=''>{res.taxName[0]}</p>
                      </li>
                      <li className='flex gap-x-1 '>
                        <span className="flex h-2 w-2 translate-y-1 rounded-full bg-green-500" />
                        <p className=''>{res.taxName[1]}</p>
                      </li>
                    </ul>
                  </div>
                }
              </div>
                      
              <p className='text-bold text-blue-800  flex space-x-1 mb-2'> <Calculator className='size-5 text-gray-400' /><p className='mt-1'>Montant à payer</p></p>
            </div>
          </div>
          <div className='text-xs space-y-8 mb-3 pt-3 flex flex-col gap-y-1 mx-2.5 py-1  border-2 border-blue-200 text-gray-800 first:rounded-t-lg first:mt-0 last:rounded-b-lg dark:bg-neutral-900 dark:border-neutral-700 dark:text-white'>
            < div className='flex flex-col space-y-2'>
              {res.amount.length < 2 ?
                (<>
                  <div className='flex gap-x-1 bg-slate-100 p-1.5 pl-5'><Coins className='size-4 ' /><p className='text-gray-900  '>{res.taxBase[0]} </p><Equal className='size-3.5 ' /> <p className='font-medium '>{String(res.amount[0]).replace(...numberFormatRegex) + " Fcfa"}</p></div>
                  {res.rate.length < 2 ?
                    (
                      <div className='flex gap-x-1 bg-slate-100 p-1.5 pl-5'><Percent className='size-3.5 ' /><p className='text-gray-900  '>Pourcentage appliqué </p><Equal className='size-3.5 ' /><p className='font-bold '>{res.rate[0]}%</p> sur<p className='lowercase '>{res.taxBase[0]}</p></div>
                    )
                    :
                    (<div className='flex gap-x-1 truncate pl-5'>
                      <Percent className='size-3.5 ' />
                      <p className='text-gray-900  '> Pourcentage applicable </p><Equal className='size-3.5 ' />varie entre <p className='font-medium '>{res.rate[0]}%</p> et <p className='font-medium '>{res.rate[1]}%</p>  sur<p className='lowercase '>{res.taxBase[0]}</p>
                    </div>)
                  }
                </>) :
                (< div className='flex flex-col space-y-0.5 '>
                  <div className='flex gap-x-1 pl-5 '><Coins className='size-4 ' /><p className='text-gray-900  '>{res.taxBase[0]} </p><Equal className='size-3.5 ' /> <p className='font-medium '>{String(res.amount[0]).replace(...numberFormatRegex) + " Fcfa"}</p></div>
                  <div className='flex gap-x-1 pl-5'><Coins className='size-4 ' /><p className='text-gray-900  '>{res.taxBase[1]} </p><Equal className='size-3.5 ' /> <p className='font-medium '>{String(res.amount[1]).replace(...numberFormatRegex) + " Fcfa"}</p></div>
                            
                  {res.rate.length < 3 ?
                    <>
                      <div className='flex gap-x-1 pl-5'><Percent className='size-3.5 ' /><p className='text-gray-900  '>Pourcentage appliqué </p><Equal className='size-3.5 ' /><p className='font-medium '>{res.rate[0]}%</p> sur<p className='lowercase '>{res.taxBase[0]}</p></div>
                      <div className='flex gap-x-1 pl-5'><Percent className='size-3.5 ' /><p className='text-gray-900  '>Pourcentage appliqué </p><Equal className='size-3.5 ' /><p className='font-medium '>{res.rate[1]}%</p> sur<p className='lowercase '>{res.taxBase[1]}</p></div>
                    </>
                    :
                    (<div className=' flex gap-x-1 pt-3 pl-5'>
                      <Percent className='size-3.5 ' />
                      <p className='text-gray-900  '>Pourcentages appliqués :</p>
                  
                      <ul className=' space-y-0.5 ml-4'>
                        <li className=' flex gap-x-1'>
                          <span className="flex h-2 w-2 translate-y-1 rounded-full bg-slate-400" />
                          <p className='font-medium'>{res.rate[0]}% </p>sur<p className='lowercase '>{res.taxBase[0]}</p>
                        </li>
                        <li className='flex gap-x-1 '>
                          <span className="flex h-2 w-2 translate-y-1 rounded-full bg-slate-400" />
                          entre <p className='font-medium '>{res.rate[1]}%</p> et <p className='font-medium '>{res.rate[2]}%</p>  sur<p className='lowercase '>{res.taxBase[1]}</p>
                        </li>
                      </ul>
                    </div>)
                  }
                </div>
                )}
              {res.priceAdd ? (<div className='flex gap-x-1 bg-slate-100 p-1.5 pl-5'><Plus className='size-3.5' /><p className='text-gray-900  '>Redevance additionnelle </p><Equal className='size-3.5 ' /> <p className='font-medium '>{String(res.priceAdd).replace(...numberFormatRegex) + " Fcfa"}</p></div>) : <div> </div>}
              {res.minimum ? (<div className='flex gap-x-1 bg-slate-100 p-1.5 pl-5'><TriangleAlert className='size-3.5' /><p className='text-red-900  '>Minimum de perception </p> <Equal className='size-3.5 ' /><p className='font-medium '>{String(res.minimum).replace(...numberFormatRegex) + " Fcfa"}</p></div>) : <div> </div>}
            </div>
            {res.rate.length < 3 ?
              <div className=' flex flex-row place-self-start gap-x-1 mt-5 truncate bg-slate-100 p-1.5'>
                <HandCoins className='size-6' />
                <p className='text-blue-900   '>Montant total </p>
                <Equal className='size-3.5 ' />
                <p className='font-medium '> {res.taxPrice[0]}</p>
              </div>
              :
              <div className=' flex gap-x-1 text-sm'>
                <HandCoins />
                <p className='text-blue-900  '>Montant total  :</p>
                <ul className='space-y-0.5 ml-4'>
                  <li className=' flex gap-x-1'>
                    <span className="flex h-2 w-2 translate-y-1 rounded-full bg-sky-500" />
                    <p className='font-medium'>{res.taxPrice[0]}</p>
                  </li>
                  <li className='flex gap-x-1 '>
                    <span className="flex h-2 w-2 translate-y-1 rounded-full bg-sky-500" />
                    <p className='font-medium '>{res.taxPrice[1]}</p>
                  </li>
                </ul>
              </div>
            }
              
          </div>
          <ResultMoreOption onHelp={forHelp} onHorsTax={forHorsTax} />
          <div className=' flex flex-col gap-y-2 mt-6  '>
              
            <Link href='' onClick={handleClick} className=" h-full">
              <Button variant="secondary" className=" h-full bg-gray-200 hover:bg-gray-300 w-full">
                <div className='flex gap-x-1 h-full justify-center'>
                  <RotateCcw className='size-5 ' />
                  <p className='text-blue-900 text-center'>Faire une autre simulation</p>
                </div>
              </Button>
            </Link>
          </div>
        </Card>
      }
    </div>
  )
}
