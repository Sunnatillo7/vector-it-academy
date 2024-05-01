import { ILessons } from "./i-lessons"
import { ILink } from "./i-link"
import { ITariff } from "./i-tariff"

export interface ICourse {
    id: string,
    name: string,
    desc: string,
    mentorId: string,
    mentorName: string,
    tariffs: ITariff[],
    imgSrc: string,
    lessons: ILessons[],
    link: ILink[]
}




