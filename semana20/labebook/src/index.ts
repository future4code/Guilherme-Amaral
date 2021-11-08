import app from "./app"
import { PostsBusiness } from "./business/PostsBusiness"
import { UserBusiness } from "./business/UserBusines"
import { PostsController } from "./controller/PostsController"
import { UserController } from "./controller/UserController"
import { PostData } from "./data/PostData"
import { UserData } from "./data/UserData"
import { Authenticator } from "./service/Authenticator"
import { HashManager } from "./service/HashManager"
import { IdGenerator } from "./service/IdGenerator"


const userController = new UserController(

    new UserBusiness(
        new UserData(),
        new IdGenerator(),
        new Authenticator(),
        new HashManager()
    )
)

app.post("/user/signup", userController.sigup)
app.post("/user/login", userController.login)

const postsController = new PostsController (

    new PostsBusiness (
        new PostData(),
        new IdGenerator(),
        new Authenticator()
    )
)

app.post("/user/post", postsController.posts)
app.get("/post/:id", postsController.findPost)