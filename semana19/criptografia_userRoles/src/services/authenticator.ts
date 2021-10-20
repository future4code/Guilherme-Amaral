import dotenv from "dotenv"
import { JwtPayload, sign, verify } from "jsonwebtoken";
import { authenticationData } from "../interfaces";

dotenv.config()

export class Authenticator {

    public generateToken = (payload: authenticationData): string => {

        const token = sign (
            payload,
            process.env.JWT_KEY as string,
            {expiresIn: "10h"}
        )

        return token
    }

    public getTokenData = (
        token: string
    ) : authenticationData | null => {

        try {
            const tokenData = verify(
                token,
                process.env.JWT_KEY as string
            ) as JwtPayload

            return {
                id: tokenData.id,
                role: tokenData.role
            }

        } catch (error) {
            console.log(error)
            return null

        }
    }


}