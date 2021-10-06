import express, {Express, Request, Response} from 'express'
import cors from 'cors'
import { AddressInfo } from "net"
import knex from 'knex'
import dotnev from 'dotenv'


const app: Express = express()
app.use(express.json());
app.use(cors());

dotnev.config()

export const connection = knex({
	client: "mysql",
	connection: {
    host: process.env.DB_HOST,
    port: 3306,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME
  }
});

const createUser = async (
    name: string,
    nickname: string,
    email: string
) : Promise <void> => {
    await connection.insert ({
        name: name,
        nickname: nickname,
        email: email
    })
    .into ('TodoListUser')
}


app.post('/user', async (req: Request, res: Response) => {
    let errorCode = 400

    try {
        await createUser(
            req.body.name,
            req.body.nickname,
            req.body.email
        )
        res.status(200).send('Cadastrado')

    } catch (error: any) {
        res.status(errorCode).send ({message: error.message})
    }
})

const userById = async (id: number) : Promise <any> => {
    const result = await connection.raw (`
    SELECT * FROM TodoListUser WHERE id = '${id}'
    `)
    return result[0][0]
}

app.get('/user/:id', async (req: Request, res: Response) => {
    let errorCode = 400

    try {
        const id = Number(req.params.id)
        const result = await userById(id)

        res.status(200).send({ id: result.id, nickname: result.nickname })

    } catch (error: any) {
        res.status(errorCode).send ({message: error.message})
    }
})

const updateNameNickname = async (id: number, name: string, nickname: string) : Promise <any> => {
    await connection ('TodoListUser')
        .update ({
            name: name,
            nickname: nickname
        })
        .where('id',id)
}

app.put('/user/edit/:id', async (req: Request, res: Response) => {
    let errorCode = 400
    try {
        await
        req.params.id
            updateNameNickname (
            req.body.id,
            req.body.name,
            req.body.nickname
        )
        res.status(200).send({message: 'Sucesso'})
       
    } catch (error: any) {
        res.status(errorCode).send({message: error.message})
    }
})

const createTask = async (
    title: string,
    description: string,
    limitDate: Date,
    creatorUserId: number
) : Promise <void> => {
    await connection
    .insert ({
        title: title,
        description: description,
        limitDate: limitDate,
        creatorUserId: creatorUserId
    })
    .into ('Task')
}

app.post ('/task', async (req: Request, res: Response) => {
    let errorCode = 400

    try {
        await createTask(
            req.body.title,
            req.body.description,
            req.body.limitDate,
            req.body.creatorUserId
        )
        res.status(200).send('Tarefa cadastrada')

    } catch (error: any) { 
        res.status(errorCode).send ({message: error.message})
    }
})


const server = app.listen(process.env.PORT || 3003, () => {
    if (server) {
       const address = server.address() as AddressInfo;
       console.log(`Server is running in http://localhost:${address.port}`);
    } else {
       console.error(`Failure upon starting server.`);
    }
});