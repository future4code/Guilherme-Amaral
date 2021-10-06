import express, {Express, Request, Response} from 'express'
import cors from 'cors'
import {AddressInfo} from 'net'

const app: Express = express()

app.use (express.json())
app.use (cors())

type contaUsuario = {

    nome: string;
    cpf: number;
    nascimento: number,
    saldo: number,

    extrato: [{
        data: number,
        valor: number
    }]
}

let usuarios: contaUsuario[] = [

  {
    nome: "Guilherme",
    cpf: 123456789,
    nascimento: 1991,
    saldo: 0,

    extrato: [{
        data: 0,
        valor: 10
    }]
  }, 

  {
    nome: "Rogerio",
    cpf: 456987123,
    nascimento: 1959,
    saldo: 0,
    
    extrato: [{
        data: 0,
        valor: 0
    }]
  }
]

app.post ('/criarUsuario', (req: Request, res: Response) => {

    let errorCode: number = 400

    try {
        const {nome, cpf, nascimento} = req.body

        if ( nascimento > 2003) {
            errorCode = 402 
            throw new Error ("Você precisa ter mais de 18 anos para criar sua conta")
        }
        if ( !nome || !cpf || !nascimento) {
            errorCode = 402
            throw new Error ("Verifique os campos digitados")
        }

        const novoUsuario: contaUsuario = {
            nome,
            cpf,
            nascimento,
            saldo: 0,

            extrato: [{
                data: 0,
                valor: 0
            }]
        }

        usuarios.push(novoUsuario)
        res.status(201).send({message: "Usuário cadastrado com sucesso!"})

    } catch (error :any) {
        res.status(errorCode).send({message: error.message})
    }
    
} )

app.get ('/buscarUsuarios', (req: Request, res: Response) => {

    let errorCode = 400 

    try {

        res.status(200).send(usuarios)


    } catch (error: any) {
        res.status(errorCode).send({message: error.message})
    }
})

app.get ('/buscarSaldo', (req: Request, res: Response) => {

    let errorCode = 400

    try {

        const buscarSaldoPeloCpf: number = Number(req.query.cpf)
        const usuario: contaUsuario | undefined = usuarios.find((usuario) => usuario.cpf === buscarSaldoPeloCpf)
        res.status(200).send(usuario)

    } catch (error: any) { 

        res.status(errorCode).send({message: error.message})
    }
})

const server = app.listen(process.env.PORT || 3003, () => {
    if (server) {
        const address = server.address() as AddressInfo
        console.log (`Server ir running in http://localhost: ${address.port}`)
    } else {
        console.error (`Failure upon starting server`)
    }
})

