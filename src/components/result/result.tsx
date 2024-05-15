import React from 'react'
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
import { landlordsExpenses } from '../questions/calcul/IRF/questions/landlordsExpenses';
import { realEstateExpensesPrice } from '../questions/calcul/IRF/questions/realEstateExpensesPrice';
import { liter } from '../questions/calcul/IS/questions/liter';
import { Button } from "@/components/ui/button"
import Link from 'next/link';



export interface ResultProps {
  tax: string;
  answers: { question: string; response: string[] }[]
}

export const Result: React.FC<ResultProps> = ({ tax, answers }) => {
  const [alert, setAlert] = useState("")
  const [message, setMessage] = useState("")
  let price = [0];

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
      console.log(amount)
      console.log(rate)
      console.log(min)
      price[0] = new_num ? new_num : 0

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

      break;
    }

    case "TFU": {
      let built = parseFloat(result('builtProperties')[0])
      built = isNaN(built) ? 0 : built
      let undeveloped = parseFloat(result('undevelopedProperties')[0])
      undeveloped = isNaN(undeveloped) ? 0 : undeveloped
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
      break;
    }

    case "TPS": {
      let ca = parseFloat(result('entryCalcul')[0])
      if (ca > 50000000) {
        console.log("Votre chiffre d'affaire est suppérieur à 50 millions vous devez être soumis à l'IBA")
      } else {
        let new_num = taxCalcul(ca, 5, 10000, 4000)
        price[0] = new_num ? new_num : 0
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
    <div className="text-center md:text-left lg:text-right">
      <div className='max-w-screen-md mx-auto'>
        <Card className="md-w-1/2 mx-4 mt-4">
          <CardHeader>
            <CardContent className='p-4'>
              <div className="flex flex-col space-y-4 ">
                <ul className="max-w-xs flex flex-col">
                  <div className='flex flex-row place-self-start gap-x-6 mb-4 '>
                    <p className='text-extrabold text-md'>
                      Type d'impôt :
                    </p>
                    {tax}
                  </div>

                  <li className='inline-flex flex-col gap-x-10 py-3 px-6 pr-8 text-sm font-medium bg-white border-2 border-gray-200 text-gray-800 -mt-px first:rounded-t-lg first:mt-0 last:rounded-b-lg dark:bg-neutral-900 dark:border-neutral-700 dark:text-white'>
                    <p className='text-bold text-sm uppercase text-center'>Montant à payer</p>
                    <div className='place-self-statrt flex flex-col place-self-start gap-x-6 mb-6'>
                      <span>30% ...............</span>
                      <span>30% ...............</span>
                      <span>30% ...............</span>
                      <span>30% ...............</span>
                    </div>
                    <div className='place-self-statrt flex flex-row place-self-start gap-x-6'>
                      <span>Montant:</span>
                      {price.length === 1 ? price[0] + ' Fcfa' : price.length === 2 ? ('le prix se trouve entre ' + price[0]) + ' et ' + price[1] + ' Fcfa' : tax.split("&")[0] + ": " + price[0] + ' Fcfa; ' + tax.split("&")[1] + ' : entre ' + price[1] + ' et ' + price[2] + ' Fcfa'}

                    </div>

                  </li>
                </ul>
                <div className='place-self-statrt flex flex-col place-self-start gap-y-1'>
                  <p className='text-bold text-md'>Possibilité de réduction :</p>
                </div>
              </div>
              <div className='place-self-statrt flex flex-row place-self-statrt gap-x-10 mt-4'>
                <Button variant="secondary" className="w-full h-full bg-blue-200 hover:bg-blue-300 ">Voir les exonérations</Button>
                <Link href='' onClick={handleClick}>
                  <Button variant="secondary" className="w-full h-full bg-blue-200 hover:bg-blue-300 ">Faire une autre simulation</Button>
                </Link>
              </div>
            </CardContent>
          </CardHeader>
        </Card>
      </div>

    </div >
  )
}
