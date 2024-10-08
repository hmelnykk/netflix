import { ReactNode } from "react"

export interface FilmTemplate {
    id: string,
    name: string,
    description: string,
    category: string,
    tags: string[],
    globalRating: number,
    countryRating: object[],
    poster: string
}

export interface HeaderProps {
    children? : ReactNode
}