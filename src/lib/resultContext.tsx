import { createContext } from 'react';
import { ResultInterface} from "@/lib/type/type"
  export const result:ResultInterface =  {
      taxName: [""],
      taxBase:[""],
      amount: [0],
      rate: [0],
      minimum: 0,
      priceAdd: 0,
      taxPrice: [0]
      , exoneration: "" 
      }
export const ResultContext = createContext(result);