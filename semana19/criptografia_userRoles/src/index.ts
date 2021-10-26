import app from "./app"
import { createUser } from "./endpoints/createUser"
import { infoUser } from "./endpoints/infoUser"
import { loginUser } from "./endpoints/loginUser"
import { infoUser1 } from "./endpoints/normalUser"
import { HashManager } from "./services/hashManager"


app.post("/createUser", createUser)
app.post("/user/login", loginUser)
app.get("/user/profile", infoUser)
app.get("/user/profile2", infoUser1)



//const hash = new HashManager().generateHash("bananinha")
//função que criptografa a senha 

//console.log (new HashManager().compareHash("bananinha", "$2a$12$V0dtSecxQQ5PslyJ26uoeubaxBrJxDFO8hO5VxrZ6Vce1rU8SUrtC"))
//Função que verifica a senha com a criptografia 
