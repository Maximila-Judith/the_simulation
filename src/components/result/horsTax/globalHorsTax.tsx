
import { is } from "./items/is"
import { iba } from "./items/iba"
import { irf } from "./items/irf"
import { tfu } from "./items/tfu"
import { tps } from "./items/tps"
import { its } from "./items/its"

export const ht = {
    iba: iba,
    is: is,
    tps: tps,
    irf: irf,
    tfu: tfu,
    its:its
}
export const valHT = Object.values(ht)