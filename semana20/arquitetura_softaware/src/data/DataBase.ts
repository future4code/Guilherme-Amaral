import { User } from "../entites/User";
import { BaseDataBase } from "./BaseDatabase";

export class DataBase extends BaseDataBase {
   
    public async createUser (user: User) {

        try {

            await BaseDataBase.connection ('user_aula58')
            .insert ({
                id: user.getId(),
                name: user.getName(),
                email: user.getEmail(),
                password: user.getPassword(),
                role: user.getRole()
            })


        } catch (error: any) {
            throw new Error (error.sqlMessage || error.message)
        }
    }

    public async login (email: string) : Promise<User> {
       try {
        const user = await BaseDataBase.connection('user_aula58')
        .select ('*')
        .where ({email})

        return user[0] && User.toUserModel(user[0])

       } catch (error: any) {
        throw new Error (error.sqlMessage || error.message)
       }
       
    }

    public async getAll () : Promise<User[]> {
        try {
            const getAllUsers = await BaseDataBase.connection ('user_aula58')
            .select('*')

            return getAllUsers.map((user) => User.toUserModel(user))


        } catch (error: any) {
        throw new Error (error.sqlMessage || error.message)
        }
    }

    public async deleteUser (id: string) : Promise <void> {

        try {
            const deleteUser = await BaseDataBase.connection
            .where({id})
            .from('user_aula58')
            .delete()

        } catch (error: any) {
        throw new Error (error.sqlMessage || error.message)
        }
    }

}