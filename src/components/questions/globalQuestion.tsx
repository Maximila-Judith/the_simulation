import { entry } from "./entry";
import { plot } from "./plot";
import { associate } from "./associate";
import { rising } from "./amount";
import { Ca } from "./calcul/entryCalcul";
import { Encaissable} from "./calcul/encaissable";

export const Questions = {
    entry: entry,
    plot: plot,
    associate: associate,
    amount: rising,
    entryCalcul: Ca,
    encaissable : Encaissable

} 