import database from './hermes'
import { ref, set, onValue } from "firebase/database";
import { Actioner , Action} from "../model/Action";
import { Stat, Parameter } from "../model/Stat";


export function getParameter({param}:{param:Parameter}){
    const paramRef = ref(database, 'telemetry/' + param.toString())
    onValue(paramRef, (snapshot) => {
        const data = snapshot.val();

        return data;
    });

    return onValue;
}