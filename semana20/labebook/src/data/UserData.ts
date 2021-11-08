import { User } from "../entites/User";
import { BaseDatabase } from "./BaseDatabase";

export class UserData extends BaseDatabase {

    public createUser = async (user: User) => {

        try{
            await BaseDatabase.connection ('user_labebook')
            .insert ({
                id: user.getId(),
                name: user.getName(),
                email: user.getEmail(),
                password: user.getPassword(),
            })

        } catch (error: any) {
            throw new Error (error.sqlMessage || error.message)
        }
    }

    public verfyEmail = async (email: string) : Promise <User> => {
        try {

            const result = await BaseDatabase.connection('user_labebook')
            .select ()
            .where ({email})
            return result[0] && User.toUserModel(result[0])

        } catch (error: any) {
            throw new Error (error.sqlMessage || error.message)
        }
    }

    


}