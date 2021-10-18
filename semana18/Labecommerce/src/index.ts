import express, {Express} from 'express'
import cors from 'cors'
import { AddressInfo } from "net"
import { createUser } from './endpoints/createUser';
import { createProduct } from './endpoints/createProduct';
import { getUser } from './endpoints/getUser';
import { getProduct } from './endpoints/getProduct';
import { createTrip } from './endpoints/createTrip';
import { getTrip } from './endpoints/getTrip';
import { createPurchase } from './endpoints/createPurshace';


const app: Express = express();

app.use(express.json());
app.use(cors());

app.post ("/createUser", createUser)
app.post ("/createProduct", createProduct)
app.post ("/createTrip", createTrip)
app.post ("/createPurshace", createPurchase)

app.get ("/getUser", getUser)
app.get ("/getProduct", getProduct)
app.get ("/getTrip", getTrip)


const server = app.listen(process.env.PORT || 3003, () => {
    if (server) {
       const address = server.address() as AddressInfo;
       console.log(`Server is running in http://localhost: ${address.port}`);
    } else {
       console.error(`Failure upon starting server.`);
    }
});