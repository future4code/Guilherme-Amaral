import express, {Express, Request, Response} from 'express'
import cors from 'cors' 
import {AddressInfo} from 'net'

const app: Express = express()

app.use (express.json())
app.use (cors ())

type user = {
    id: number;
    name: string;
    email: string;
    type: string;
    age: number;
  };



let users: user[] = [
    {
      id: 1,
      name: "Alice",
      email: "alice@email.com",
      type: "ADMIN",
      age: 12,
    },
    {
      id: 2,
      name: "Bob",
      email: "bob@email.com",
      type: "NORMAL",
      age: 36,
    },
    {
      id: 3,
      name: "Coragem",
      email: "coragem@email.com",
      type: "NORMAL",
      age: 21,
    },
    {
      id: 4,
      name: "Dory",
      email: "dory@email.com",
      type: "NORMAL",
      age: 17,
    },
    {
      id: 5,
      name: "Elsa",
      email: "elsa@email.com",
      type: "ADMIN",
      age: 17,
    },
    {
      id: 6,
      name: "Fred",
      email: "fred@email.com",
      type: "ADMIN",
      age: 60,
    },
  ];

//Requisição teste pegando a lista completa. 
app.get ('/list', (req: Request, res: Response) => {
    let errorCode: number = 400

    try{
        res.status(200).send(users)

    } catch (error) {
        res.status(errorCode).send({message: error})
    }
})

//a) o Metodo Http usado é o metodo get 
//b) a entidade manipulada é uma lista denominada de: list

app.get ('/list/searchType', (req: Request, res: Response) => {
    let errorCode: number = 400
    
    try{
        const type: string = req.query.type as string
        const searchType: user[] | undefined = users.filter((user) => user.type === type)
        
        if(!searchType) {
            errorCode = 404
            throw new Error ('User not found')
        }
        res.status(200).send(searchType)

    } catch (error: any) {
        res.status(errorCode).send({message: error.message})
    }
})

//a) utilizei o metodo get com um novo endpoint para evitar conlflito com o endpont que buscava todos os usuarios 
//b) fazendo um if e else apenas os types validos serão utilizados 

app.get ('/list/:name', (req: Request, res: Response) => {
  let errorCode: number = 404

  try {
    const name: string = req.params.name as string 
    const searchName: user | undefined = users.find((user) => user.name === name)
    if (!searchName) {
      errorCode = 404
      throw new Error ('User not found')
    }
    res.status(200).send(searchName)

  } catch (error: any) {
    res.status(errorCode).send({message: error.message})
  }
})

//a) Usei a reiquisção get combinada com o parametro params para efetuar a busca por nome, tbm é possivel utilizar o paramento query para fazer a busca 
//b) fiz utilizando o errorCode e o throw new Error 

app.post ('/list/createUser', (req: Request, res: Response) => {
  let errorCode = 404 

  try {
    const {id, name, email, type, age} = req.body

    if(!id || !name || !email || !type || !age) {
      errorCode = 422
      throw new Error ('Check the typed inputs')
    }

    const createNewUser: user = {
      id,
      name,
      email,
      type,
      age
    }

    users.push(createNewUser)

    res.status(200).send({message: 'User created successefully'})

  } catch (error: any) {
    res.status(errorCode).send({message: error.message})
  }
})

//a) Os dois metodos criam o usuário, porém no metodo put ele altera o ultumo usuario para o novo usuario criado
//n) o metodo put não é apropriado, pois ele subistitui um usuario e adiciona outro

const server = app.listen(process.env.PORT || 3003, () => {
    if (server) {
        const address = server.address() as AddressInfo
        console.log (`Server ir running in http://localhost${address.port}`)
    } else {
        console.error ('Failure upon starting server')
    }
})

