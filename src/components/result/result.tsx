
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
import { taxCalcul } from '@/lib/functions/taxCalcul';
import { useState } from 'react';
import { Button } from "@/components/ui/button"
import Link from 'next/link';
import { numberFormatRegex } from "@/lib/regex/numberRegex"



export interface ResultProps {
  tax: string;
  answers: { question: string; response: string[] }[]
}

export const Result: React.FC<ResultProps> = ({ tax, answers }) => {
  let res = {
    taxName: "",
    taxBase: [""],
      amount: [0],
      rate: [0],
      minimum: 0,
      priceAdd: 0,
      taxPrice: ""
  }
  let price = [];
  let taxName =""

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
         taxName: "Impôt sur les sociétés",
         taxBase:["Le chiffre d'affaire réalisé"], 
         amount: [amount],
         rate: [rate],
         minimum: min,
         priceAdd: 4000,
         taxPrice: String(price[0]).replace(...numberFormatRegex) + ' Fcfa'
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
      taxName: "Impôt sur le Bénéfice d'Affaire (IBA) ainsi que la Taxe Foncière Unique (TFU)",
      taxBase:["Le chiffre d'affaire réalisé", taxB],
      amount: [amount, amountTfu],
      rate: [30, rate[0], rate[1]],
      minimum: 0,
      priceAdd: 0,
      taxPrice: 'IBA :' + String(price[0]).replace(...numberFormatRegex) + ' Fcfa, ' + 'TFU entre ' +String(price[1]).replace(...numberFormatRegex) + ' Fcfa et '+ String(price[2]).replace(...numberFormatRegex) + ' Fcfa'
        }
      break;
    }
    case "IRF&TFU": {
      //IRF
      taxName ="Impôt sur les Revenus Fonciers (IRF) ainsi que la Taxe Foncière Unique (TFU)"
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
      taxName: "Impôt sur les Revenus Fonciers (IRF) ainsi que la Taxe Foncière Unique (TFU)",
      taxBase:["Les revenus fonctiers", taxB],
      amount: [rev, amountTfu],
      rate: [30, rate[0], rate[1]],
      minimum: 0,
      priceAdd: 0,
      taxPrice: 'IRF :' + String(price[0]).replace(...numberFormatRegex) + ' Fcfa, '+ 'TFU entre ' +String(price[1]).replace(...numberFormatRegex) + ' Fcfa et '+ String(price[2]).replace(...numberFormatRegex) + ' Fcfa'
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
        taxName: "Impôt sur le Bénéfice d'Affaire (IBA)",
        taxBase: ["Le bénéfice réalisé"],
      amount: [amount],
      rate: [rate],
      minimum: min,
      priceAdd: 4000,
      taxPrice: String(price[0]).replace(...numberFormatRegex) + ' Fcfa'
        }
      break;
    }

    case "TFU": {
      taxName ="Taxe Foncière Unique (TFU)"
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
        taxName: "Taxe Foncière Unique (TFU)",
        taxBase:[taxB],
      amount: [amount],
      rate: rate,
      minimum: 0,
      priceAdd: 0,
      taxPrice: 'Entre ' +String(price[0]).replace(...numberFormatRegex) + ' Fcfa et '+ String(price[1]).replace(...numberFormatRegex) + ' Fcfa'
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
      taxName: "Impôt sur les Revenus Fonciers (IRF)",
      taxBase:["Les revenus fonctiers"],
      amount: [rev],
      rate: [12],
      minimum: 0,
      priceAdd: 4000,
      taxPrice: String(price[0]).replace(...numberFormatRegex) + ' Fcfa'
        }
      break;
    }

    case "TPS": {
      let ca = parseFloat(result('entryCalcul')[0])
        let new_num = taxCalcul(ca, 5, 10000, 4000) 
      price[0] = new_num ? new_num : 0
       res = {
      taxName: "Taxe Professionnelle Synthétique (TPS)",
      taxBase:["Le chiffre d'affaire"],
      amount: [ca],
      rate: [5],
      minimum: 10000,
      priceAdd: 4000,
      taxPrice: String(price[0]).replace(...numberFormatRegex) + ' Fcfa'
        }
      break;
    }

    case "ITS": {
    
      let salaryMonth = result('entryCalcul')[0]
      let fee = (salaryMonth === 'march') ? 1000 : (salaryMonth === 'june') ? 3000 : 0
      let sal = parseFloat(result('salary')[0])
      let rate = sal <= 60000 ? 0 : sal >= 60001 && sal <= 150000 ? 10 : sal >= 150001 && sal <= 250000 ? 15 : sal >= 250001 && sal <= 500000 ? 19 : sal > 500000 ? 30 : 0

      let new_num = taxCalcul(sal, rate, 0, fee)
      price[0] = new_num ? new_num : 0

      res = {
      taxName: "Impôt sur les Traitements et Salaire (ITS)",
      taxBase:["Le salaire reçu"],
      amount: [sal],
      rate: [rate],
      minimum: 0,
      priceAdd: fee,
      taxPrice: String(price[0]).replace(...numberFormatRegex) + ' Fcfa'
        }
      break;
    }
  }


  function result(quest: string) {
    let obj = answers.find(answer => answer.question === quest)
    return obj ? obj.response : [""]
  }

  const handleClick = () => {
    window.location.href = '/accueil';
  };


  return (
    <div className=" lg:text-left ">
      <Card className={styles.result}>
                      <div className='ml-3 mt-3 '>
                        <p className='text-center text-xl text-indigo-900 pb-1'>Résultat de la simulation </p>
                          <p className='flex gap-x-1 text-md'>
                          <p className='text-blue-800 text-sm '>Type d'impôt :</p> {res.taxName}
                          </p>  
                        <p className='text-bold text-blue-800 text-sm'>Montant à payer</p>
                      </div>
                  <div className=' pl-2 gap-x-2 gap-y-3 mx-2.5 py-1 text-sm border-2 border-blue-200 text-gray-800 first:rounded-t-lg first:mt-0 last:rounded-b-lg dark:bg-neutral-900 dark:border-neutral-700 dark:text-white'>
                  {res.amount.length < 2 ? 
                        (<>
                            <div className='flex gap-x-1'><p className='text-orange-800 text-sm '>{res.taxBase[0]} :</p> <p className='font-medium '>{String(res.amount[0]).replace(...numberFormatRegex) +" Fcfa"}</p></div>
                      {res.rate.length < 2 ? 
                          (
                            <div className='flex gap-x-1'><p className='text-orange-800 text-sm '>Pourcentage appliqué :</p><p className='font-medium '>{res.rate[0]}%</p> sur<p className='lowercase '>{res.taxBase[0]}</p></div>
                          )
                        : 
                          (<div className='flex gap-x-1'>
                           <p className='text-orange-800 text-sm '>Pourcentages appliqués :</p>minimum :<p className='font-medium '>{res.rate[0]}%</p> et maximum : <p className='font-medium '>{res.rate[1]}%</p>  sur<p className='lowercase '>{res.taxBase[0]}</p>
                           </div>)
                          } 
                        </>) : 
                         (<>
                            <div className='flex gap-x-1'><p className='text-orange-800 text-sm '>{res.taxBase[0]} :</p> <p className='font-medium '>{String(res.amount[0]).replace(...numberFormatRegex) +" Fcfa"}</p></div>
                            <div className='flex gap-x-1'><p className='text-orange-800 text-sm '>{res.taxBase[1]} :</p> <p className='font-medium '>{String(res.amount[1]).replace(...numberFormatRegex) +" Fcfa"}</p></div>
                           
                      {res.rate.length < 3 ? 
                          (<div className=' flex gap-x-1'>
                            <div className='flex gap-x-1'><p className='text-orange-800 text-sm '>Pourcentage appliqué :</p><p className='font-medium '>{res.rate[0]}%</p> sur<p className='lowercase '>{res.taxBase[0]}</p></div>
                            <div className='flex gap-x-1'><p className='text-orange-800 text-sm '>Pourcentage appliqué :</p><p className='font-medium '>{res.rate[1]}%</p> sur<p className='lowercase '>{res.taxBase[1]}</p></div>
                           </div>)
                        : 
                        (<div className='flex gap-x-1'>
                              <div className='flex gap-x-1'><p className='text-orange-800 text-sm '>Pourcentage appliqué :</p><p className='font-medium '>{res.rate[0]}%</p> sur<p className='lowercase '>{res.taxBase[0]}</p></div>
                              <p className='text-orange-800 text-sm '>Pourcentages appliqués :</p>minimum :<p className='font-medium '>{res.rate[1]}%</p> et maximum : <p className='font-medium '>{res.rate[2]}%</p>  sur<p className='lowercase '>{res.taxBase[1]}</p>
                           </div>)
                          }
                          </>
                        )}
                           {res.priceAdd && <div className='flex gap-x-1'><p className='text-orange-800 text-sm '>Redevance additionnelle :</p> <p className='font-medium '>{ String(res.priceAdd  ).replace(...numberFormatRegex) +" Fcfa"}</p></div>} 
                           {res.minimum && <div className='flex gap-x-1'><p className='text-orange-800 text-sm '>Minimum de perception :</p> <p className='font-medium '>{ String(res.minimum ).replace(...numberFormatRegex) +" Fcfa"}</p></div>}
                          <div className=' flex flex-row place-self-start gap-x-6 mt-3'>
                            <p className='text-orange-800 text-sm  '>Montant total :</p>
                                <p className='font-medium '> {res.taxPrice }</p>
                          </div>
                  </div>
                <div className='flex flex-col place-self-start gap-y-1'>
                  <p className='text-bold text-md'>Possibilité de réduction :</p>
                </div>

              <div className=' flex flex-row place-self-start gap-x-10 mt-4'>
                <Button variant="secondary" className="w-full h-full bg-blue-200 hover:bg-blue-300 ">Voir les exonérations</Button>
                <Link href='' onClick={handleClick}>
                  <Button variant="secondary" className="w-full h-full bg-blue-200 hover:bg-blue-300 ">Faire une autre simulation</Button>
                </Link>
              </div>
            </Card>
      </div>
  )
}
