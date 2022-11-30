import {initializeApp} from 'firebase/app'
import config from "../firebase-config";
import { getDatabase } from "firebase/database";

var app = initializeApp(config)
const database = getDatabase(app);

export default database;