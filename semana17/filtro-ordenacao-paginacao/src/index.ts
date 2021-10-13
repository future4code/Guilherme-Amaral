import express, {Express} from 'express'
import cors from 'cors'
import { AddressInfo } from "net"
import { getAllUsers } from './endpoints/getAllUsers';
import { getAllUsersType } from './endpoints/getAllUsersType';
import { getAllUsersOrdenation } from './endpoints/getAllUsersOrdenation';
import { getAllUsersPages } from './endpoints/getAllUsersPages';


const app: Express = express()

app.use(express.json());
app.use(cors());

app.get("/users", getAllUsers)
app.get("/usersType", getAllUsersType)
app.get("/users/ordenation", getAllUsersOrdenation)
app.get("/users/Page", getAllUsersPages)


const server = app.listen(process.env.PORT || 3003, () => {
    if (server) {
       const address = server.address() as AddressInfo;
       console.log(`Server is running in http://localhost: ${address.port}`)
    } else {
       console.error(`Failure upon starting server.`);
    }
});