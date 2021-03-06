import app from "./app"
import { UserController } from "./controller/UserController"

const userController = new UserController()


app.post ("/signup", userController.signUp)
app.post ("/login", userController.login)
app.get ("/all", userController.getUsers)
app.delete("/:id", userController.deleteUser)