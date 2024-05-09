

export function taxCalcul (amount: number,rate: number,min : number ,fee :number){
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