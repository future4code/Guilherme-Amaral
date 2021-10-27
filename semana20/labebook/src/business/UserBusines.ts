import { UserData } from "../data/UserData"
import { User } from "../entites/User"
import { Authenticator } from "../service/Authenticator"
import { HashManager } from "../service/HashManager"
import { IdGenerator } from "../service/IdGenerator"

export class UserBusiness {

    constructor (

       private userData: UserData,
       private idGenerator: IdGenerator,
       private authenticator: Authenticator,
       private hashManager: HashManager

    ) {}

    userSignup = async (input: any) => {

        const {name, email, password} = input

        if (!name || !email || !password) {
            throw new Error ("Insira corretamente o 'name', 'email' e 'password' e tente novamente!")
        }
        
        if (email.indexOf ("@") === -1) {
            throw new Error ("Email inválido!")
        }

        if (password.length < 6) {
            throw new Error ("O password deve haver mais de 6 caracteres.")
        }

        const verfyEmail = await this.userData.verfyEmail (email)

        if (verfyEmail) {
            throw new Error ("Email já Cadastrado")
        }

        const id = this.idGenerator.generate()

        const hashPassword = await this.hashManager.hash(password)
        
        const createUser = new User (id, name, email, hashPassword)
        const newUser = await this.userData.createUser (createUser)

        const token = this.authenticator.generate ({id})

        return token
      
    }

    userlogin = async (input: any) => {

        const {email, password} = input 

        if (!email || !password) {
            throw new Error ("Insira corretamente 'email' e 'password'.")
        }

        if (email.indexOf ("@") === -1){
            throw new Error ("Email inválido.")
        }
    
        if (password.length < 6) {
            throw new Error ("O password deve haver mais de 6 caracteres")
        }

        const user = await this.userData.verfyEmail(email)

        if (!user) {
            throw new Error ("Email não cadastrado")
        }

        const passwordIsCorrect = await this.hashManager.compare(password, user.getPassword())

        if(!passwordIsCorrect) {
            throw new Error ("Email ou senha incorretos")
        }

        const token = this.authenticator.generate({id: user.getId()})

        return token
    }

}
