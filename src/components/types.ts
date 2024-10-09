import { ReactNode } from "react"

export interface FilmTemplate {
    id: string,
    name: string,
    description: string,
    category: string,
    tags: string[],
    globalRating: number,
    countryRating: object[],
    poster: string,
    comments: {
        comment: string
        user: string
        rating: number
    }[]
}

export interface HeaderProps {
    children? : ReactNode
}