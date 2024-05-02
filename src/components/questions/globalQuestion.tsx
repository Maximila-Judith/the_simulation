import { Ca } from "./calcul/entryCalcul";
import { aloneManagement } from '@/components/questions/taxType/aloneManagement'
import { amount } from '@/components/questions/taxType/amount'
import { entry } from '@/components/questions/taxType/entry'
import { expensiveRealEstateLocation } from '@/components/questions/taxType/expensiveRealEstateLocation'
import { notExpensiveRealEstateLocation } from '@/components/questions/taxType/notExpensiveRealEstateLocation'
import { useOfRealEstate } from '@/components/questions/taxType/useOfRealEstate'
import { realEstateRole } from '@/components/questions/taxType/realEstateRole'
import { realEstateStatus } from '@/components/questions/taxType/realEstateStatus'
import { realEstateLocation } from '@/components/questions/taxType/realEstateLocation'
import { workingSituation } from '@/components/questions/taxType/workingSituation'
import { Encaissable } from "./calcul/encaissable";


export const Questions = {
    aloneManagement: aloneManagement,
    entry: entry,
    amount: amount,
    expensiveRealEstateLocation: expensiveRealEstateLocation,
    notExpensiveRealEstateLocation: notExpensiveRealEstateLocation,
    useOfRealEstate: useOfRealEstate,
    realEstateRole: realEstateRole,
    realEstateStatus: realEstateStatus,
    realEstateLocation: realEstateLocation,
    workingSituation: workingSituation,
    entryCalcul: Ca,
    encaissable: Encaissable

} 