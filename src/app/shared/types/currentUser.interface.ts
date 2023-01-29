export interface CurrentUserInterface{
    id: number,
    username: string,
    email: string,
    createdAt: string,
    updateAt: string,
    bio?: string,
    image?: string,
    token?: string
}