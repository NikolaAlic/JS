import {data} from "../data/data.js";
import { User } from "../entities/user.js";

export const getUsers = () =>{
    return data.map(userData => new User(userData.name.first, userData.email, userData.dob, userData.picture));
}