import { IUser } from "../shared/i-user";

export interface IMentor extends IUser {
    bio: string,
    telegramUsername?: string,
    phone?: number,
    birthYear?: number,
}