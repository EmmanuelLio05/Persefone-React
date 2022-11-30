import database from './hermes'
import { ref, set } from "firebase/database";
import { Actioner , Action} from "../model/Action";

export function writeControl(action:Action){
    set(ref(database, 'control/' + action.actioner.toString()),action.value)
}