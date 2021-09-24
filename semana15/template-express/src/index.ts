import express, {Express, Request, Response} from 'express'
import cors from 'cors'
import {AddressInfo} from 'net'
import { countries } from './data'
import {country} from './types'

const app: Express = express() 

app.use (express.json())
app.use (cors())

const server = app.listen(process.env.PORT || 3003, () => {
    if (server) {
        const address = server.address() as AddressInfo
        console.log (`Server is running in http://localhost${address.port}`)
    } else {
        console.error (`Failure upon starting server`)
    }
})

app.get('/test/:fruta', (req: Request, res: Response) => {
    if (req.params.fruta === 'abobrinha') {
        res.send ('A chave é abobrinha!').status(200)
    } else {
        res.status(404).send ('Abobrinha not found')
    }
    res.send ("Teste bem sucedido")
})

//-------------------------------------------------------------

app.get ('/countries', (req: Request, res: Response) => {
    res.status(200).send(countries)
})

app.get ('/countries/search', (req: Request, res: Response) => {

    let result: country[] = countries

    if (req.query.name) {
        result = result.filter(
            country => country.name.includes(req.query.name as string)
            
        )
        res.status(200).send(result)
    }

    if (req.query.capital) {
        result = result.filter (
            country => country.capital.includes(req.query.capital as string)
        )
        res.status(200).send(result)
    }

    if (req.query.continent) {
        result = result.filter (
            country => country.continent.includes (req.query.continent as string)
        )
        res.status(200).send(result)
    }

    res.status(404).send ('Erro na filtragem')
})

app.get ('/countries/:id', (req:Request, res: Response) => {
 
    if (!Number (req.params.id)) {
        res.status(400).send('Envie um id valido')
    }

    const result: country | undefined = countries.find((country) => country.id === Number(req.params.id))
 
    if (result) {
        res.status(200).send(result)
    } else {
        res.status(404).send ('Country not found')
    }
})

app.delete ('/countries/:id', (req: Request, res: Response) => {

    try {     
        const token = req.headers.authorization
        if (!token) {

            res.statusCode = 401
            throw new Error ('user not registred')
        }

        if (!Number (req.params.id)) {
            res.statusCode = 400
            throw new Error ('id invalido')
        }

        const index = countries.findIndex((country) => {
            return country.id === Number (req.params.id)
        })

        if (index === -1) {
            res.statusCode = 404
            throw new Error ('Country not found')
        }

        countries.splice(index, 1)

        res.status(204).end()
    } 
    
    catch (error: any) {
        res.send (error.message)
    }

    
})




