export enum POST_TYPE {
    NORMAL = "NORMAL",
    EVENTO = "EVENTO"
}

export class Posts {
    private id: string
    private photo: string
    private description: string
    private date: string
    private type: POST_TYPE

    constructor (
        id: string,
        photo: string,
        description: string,
        date: string,
        type: POST_TYPE
    ) {

        this.id = id
        this.photo = photo
        this.description = description
        this.date = date
        this.type = type
    }

    public getId = () => {
        return this.id
    }

    public getPhoto = () => {
        return this.photo
    }

    public getDescription = () => {
        return this.description
    }

    public getDate = () => {
        return this.date
    }

    public getType = () => {
        return this.type
    }
} 