import { Posts } from "../entites/Posts";
import { BaseDatabase } from "./BaseDatabase";

export class PostData extends BaseDatabase {

    public createPost = async (post: Posts) => {

        try {

            await BaseDatabase.connection ('posts_labebook')
            .insert ({
                id: post.getId(),
                photo: post.getPhoto(),
                description: post.getDescription(),
                date: post.getDate(),
                type: post.getType()
            })


        } catch (error: any) {
            throw new Error (error. sqlMessage || error.message)
        }
    }

    public findPost = async (id: string) : Promise <Posts> => {

        try {
            const post = await BaseDatabase.connection ('posts_labebook')
            .select()
            .where ({id})
            return post[0]

        } catch (error: any) {
            throw new Error (error. sqlMessage || error.message)
        }
    }

}