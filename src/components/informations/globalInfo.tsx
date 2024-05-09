
import {infoRealEstate} from "./infos/infoRealEstate"
import {init} from "./infos/init"
import {infoAloneManagementSituation} from "./infos/infoAloneManagementSituation"
import {infoRealEstateExpenses} from "./infos/infoRealEstateExpenses"
import {infoLandlordsExpenses} from "./infos/infoLandlordsExpenses"
import {infoBuiltProperties} from "./infos/infoBuiltProperties"
import {infoEntryTfu} from "./infos/infoEntryTfu"
import {infoUndevelopedProperties} from "./infos/infoUndevelopedProperties"
import {infoCashable} from "./infos/infoCashable"
import {infoCompany} from "./infos/infoCompany"
import {infoProfit} from "./infos/infoProfit"
import {infoSalary} from "./infos/infoSalary"

export const infos = {
    infoRealEstate:infoRealEstate,
    init: init,
    infoAloneManagementSituation: infoAloneManagementSituation,
    infoRealEstateExpenses:infoRealEstateExpenses,
    infoLandlordsExpenses: infoLandlordsExpenses,
    infoUndevelopedProperties:infoUndevelopedProperties,
    infoEntryTfu:infoEntryTfu,
    infoBuiltProperties:infoBuiltProperties,
    infoCashable:infoCashable,
    infoCompany : infoCompany,
    infoProfit:infoProfit,
    infoSalary: infoSalary
 

}
export const valInfos = Object.values(infos)