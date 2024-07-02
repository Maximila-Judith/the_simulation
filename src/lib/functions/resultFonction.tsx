
import { ResultInterface } from "../type/type";
/**
 * Fonction de calcul de l'impôt.
 * @param {string} tax - type d'impôt déja déterminé au niveau du questionnaire.
 * @param {{ question: string; response: string[] }[]} answers - reponses de l'utilisateur au questionnaire.
 * @returns {ResultInterface} - resultat complet de la simulation.
 */

export function findResult(tax: string, answers: { question: string; response: string[] }[]) {
  
        let price = [];
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

        function result(quest: string) {
        let obj = answers.find(answer => answer.question === quest)
        return obj ? obj.response : [""]
      }

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
    return  res = {
        taxName: ["Impôt sur les sociétés(IS)"],
        taxBase: ["Chiffre d'affaire"],
        amount: [amount],
        rate: [rate],
        minimum: min,
        priceAdd: 4000,
        taxPrice: [price[0]],
        exoneration: 'is'
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

      return res = {
        taxName: ["Impôt sur les Bénéfices d'Affaires (IBA)", "Taxe Foncière Unique (TFU)"],
        taxBase: ["Le chiffre d'affaire réalisé", taxB],
        amount: [amount, amountTfu],
        rate: [30, rate[0], rate[1]],
        minimum: 0,
        priceAdd: 0,
        taxPrice: [price[0], price[1], price[2]]
        , exoneration: ''
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

      return res = {
        taxName: ["Impôt sur les Revenus Fonciers (IRF)", "Taxe Foncière Unique (TFU)"],
        taxBase: ["Les revenus fonctiers", taxB],
        amount: [rev, amountTfu],
        rate: [30, rate[0], rate[1]],
        minimum: 0,
        priceAdd: 0,
        taxPrice: [price[0], price[1], price[2]]
        , exoneration: ''
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

    return  res = {
        taxName: ["Impôt sur les Bénéfices d'Affaires (IBA)"],
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

    case "TFU": {

      let built = parseFloat(result('builtProperties')[0])
      built = isNaN(built) ? 0 : built
      let undeveloped = parseFloat(result('undevelopedProperties')[0])
      undeveloped = isNaN(undeveloped) ? 0 : undeveloped
      let taxB = built !== 0 ? "Le prix de propriété" : undeveloped !== 0 ? "Le prix de terrains" : ""
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
   return   res = {
        taxName: ["Taxe Foncière Unique (TFU)"],
        taxBase: [taxB],
        amount: [amount],
        rate: rate,
        minimum: 0,
        priceAdd: 0,
        taxPrice: [price[0], price[1]]
        , exoneration: 'tfu'
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

    return  res = {
        taxName: ["Impôt sur les Revenus Fonciers (IRF)"],
        taxBase: ["Les revenus fonctiers"],
        amount: [rev],
        rate: [12],
        minimum: 0,
        priceAdd: 4000,
        taxPrice: [price[0]]
        , exoneration: 'irf'
      }
      break;
    }

    case "TPS": {
      let ca = parseFloat(result('entryCalcul')[0])
      let new_num = taxCalcul(ca, 5, 10000, 4000)
      price[0] = new_num ? new_num : 0
    return  res = {
        taxName: ["Taxe Professionnelle Synthétique (TPS)"],
        taxBase: ["Le chiffre d'affaire"],
        amount: [ca],
        rate: [5],
        minimum: 10000,
        priceAdd: 4000,
        taxPrice: [price[0]]
        , exoneration: 'tps'
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

    return  res = {
        taxName: ["Impôt sur les Traitements et Salaires (ITS)"],
        taxBase: ["Le salaire reçu"],
        amount: [sal],
        rate: [rate],
        minimum: 0,
        priceAdd: fee,
        taxPrice: [price[0]]
        , exoneration: 'its'
      }
      break;

    }
      default: return {
    taxName: [""],
    taxBase: [""],
    amount: [0],
    rate: [0],
    minimum: 0,
    priceAdd: 0,
    taxPrice: [0]
    , exoneration: ""
  }
  }

}




export function taxCalcul(amount: number, rate: number, min: number, fee: number) {
    if (!isNaN(amount) && !isNaN(rate) && !isNaN(min) && !isNaN(fee) ){
      let res = (amount*rate)/100
          res = (res >= min)? res: min
          res = res+(fee?fee:0)
          res =  arround(res)
          return res
    }
    return
  }

   function arround(amount : number) {
    const rest = amount % 10;

    if (rest >= 0 && rest < 3) {
      amount -= rest; 
    } else if (rest >= 3 && rest < 8) {
      amount += (5 - rest);
    } else if (rest >= 8) {
      amount += (10 - rest);
    }
  
    return amount;
}
