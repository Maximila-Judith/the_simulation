
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
import { realEstateAssociate } from '@/components/questions/taxType/realEstateAssociate'
import { aloneManagementSituation } from '@/components/questions/taxType/aloneManagementSituation'



export const Questions = { 
    entry: entry,
    aloneManagement: aloneManagement,
    aloneManagementSituation:aloneManagementSituation,
    amount: amount, 
    realEstateStatus: realEstateStatus,
    realEstateAssociate:realEstateAssociate, 
    realEstateRole: realEstateRole,
    useOfRealEstate: useOfRealEstate,
    expensiveRealEstateLocation: expensiveRealEstateLocation,
    notExpensiveRealEstateLocation: notExpensiveRealEstateLocation,
    realEstateLocation: realEstateLocation,
    workingSituation: workingSituation

} 
export const valQuestions = Object.values(Questions)