import { Roles } from "./roles";

export interface IUser {
    id: string,
    username: string,
    firstName: string,
    lastName: string,
    signingDate: Date,
    email?: string,
    roles: Roles[],
    password?:string
}