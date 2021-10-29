import app from "./app";
import { getAllCharacters } from "./endpoints/getAllCharacters";
import { login } from "./endpoints/login";
import { signup } from "./endpoints/signup";
import { IdGenerator } from "./services/IdGenerator";


app.post("/user/signup", signup)
app.post("/user/login", login)
app.get("/Allcharacters", getAllCharacters )