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


  return (
    <div className="text-center md:text-left lg:text-right">
      <div className='max-w-screen-md mx-auto'>
        <Card className="md-w-1/2 mx-4 mt-4">
          <CardHeader>
            <CardContent className='p-10'>
              <div className="flex flex-row item-center space-x-6">
                <p>Type d'impôt :{tax}</p>
                <ul>
                  <li >  Prix: {price.length === 1 ? price[0] + ' Fcfa' : price.length === 2 ? 'le prix se trouve entre ' + price[0] + ' et ' + price[1] + ' Fcfa' : tax.split("&")[0] + ": " + price[0] + ' Fcfa; ' + tax.split("&")[1] + ' : entre ' + price[1] + ' et ' + price[2] + ' Fcfa'}</li>
                </ul>
              </div>

            </CardContent>
          </CardHeader>
        </Card>
      </div>


    </div >
  )
}
