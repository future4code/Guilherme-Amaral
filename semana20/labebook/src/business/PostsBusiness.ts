import { PostData } from "../data/PostData";
import { Posts } from "../entites/Posts";
import { Authenticator } from "../service/Authenticator";
import { IdGenerator } from "../service/IdGenerator";

export  class PostsBusiness {
    
    constructor (  

        private postData: PostData,
        private idGenerator: IdGenerator,
        private authenticator: Authenticator
        
    ) {}

    public createPosts = async (input: any) => {

        const {photo, description, date, type, token} = input 

        if (!photo || !description || !date || !type) {
            throw new Error ("Insira todas as informações para criar o post.")
        }

        if (!token) {
            throw new Error ("É necessário passar o token no headres da requisição para acessar essa funcionalidade")
        }

        this.authenticator.getTokenData(token)

        const id = this.idGenerator.generate()

        const createPost = new Posts (id, photo, description, date, type)
        const newPost = this.postData.createPost(createPost)

        return newPost
    }

    public findPost = async (input: any) => {

        const {id, token} = input

        this.authenticator.getTokenData(token)

        if (!token) {
            throw new Error ("É necessário passar o token no headres da requisição para acessar essa funcionalidade")
        }

        const findPostId = await this.postData.findPost(id)

        return findPostId
    }

}