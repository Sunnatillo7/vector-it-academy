import { ILink } from "./i-link";

export interface ILessons {
    id: string,
    name: string,
    desc: string,
    date: Date,
    links: ILink[]

}