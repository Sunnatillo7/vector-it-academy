import { IUser } from "../shared/i-user";

export interface IStudent extends IUser {
    telegramUsername?: string,
    phone?: number,
    birthYear?: number,
    ownedCourses?: string[],
    status?: any
}