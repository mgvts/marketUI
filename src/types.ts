export type pathId = number

export interface AsidePath {
    name: string
    content: AsidePath[]
    count?: number
    id: pathId
}