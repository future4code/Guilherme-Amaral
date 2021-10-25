import { DataBase } from "../data/DataBase"
import { Authenticator } from "../service/Authenticator"
import { HashManager } from "../service/HashManager"

export const loginBussines = async (input: any) => {

        const {email, passowrd} = input

        if (!email || !passowrd) { 
            throw new Error ("Insira corretamente o 'email' e 'password'.")
        }
    
        if (email.indexOf ("@") === -1){
            throw new Error ("Email inválido.")
        }
    
        if (passowrd.length < 6) {
            throw new Error ("O password deve haver mais de 6 caracteres")
        }
    
        const dataBase = new DataBase()
        const user = await dataBase.login(email)

        if (!user) {
            throw new Error ("Usuário não cadastrado.")
        }

        const hashManager = new HashManager()
        const passowrdIsCorrect = await hashManager.compare(passowrd, user.getPassword())

        if (!passowrdIsCorrect) {
            throw new Error ("Email ou senha incorretos.")
        }

        const authenticator = new Authenticator()
        const token = authenticator.generate({id: user.getId(), role: user.getRole()})

        return token


}