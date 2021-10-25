import * as bycriptjs from 'bcrypt'

export class HashManager {

    public async hash (text: string) : Promise <string> {
        const rounds = 12 
        const salt = await bycriptjs.genSalt(rounds)
        return bycriptjs.hash (text, salt)
    }

    public async compare (text: string, hash: string) : Promise <boolean> {
        return bycriptjs.compare(text,hash)
    }
}