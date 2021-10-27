import { Request, Response } from "express";
import { PostsBusiness } from "../business/PostsBusiness";

export class PostsController {

    constructor (

        private postBusiness: PostsBusiness
    ) {}

    public posts = async (req: Request, res: Response) => {
        
        try { 
            const {photo, description, date, type} = req.body

            const token = req.headers.authorization

            const result = await this.postBusiness.createPosts({photo, description, date, type, token})

            res.status(200).send({message: "Post criado", result})

        } catch (error: any) {
            res.status(400).send({message: error.message})
        }
    }

    public findPost = async (req: Request, res: Response) => {

        try {
            const {id} = req.params
            const token = req.headers.authorization

            const result = await this.postBusiness.findPost({id, token})

            res.status(200).send({result})

        } catch (error: any) {
            res.status(400).send({message: error.message})
        }
    }
}