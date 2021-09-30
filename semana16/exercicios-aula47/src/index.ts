import express, {Express, Request, Response} from 'express'
import cors from 'cors'
import {AddressInfo} from 'net'
import { connection } from './connection'

const app: Express = express()

app.use(express.json())
app.use(cors())

const getActorById = async (id:string): Promise<any> => {
    const result = await connection.raw (`
    SELECT * FROM Actor WHERE id = '${id}'
    `)

    return result [0][0]
}

/*
getActorById ('005')
    .then (res => {
        console.log (res)
    })
    .catch(err => {
        console.log (err)
    })
*/

//-----------------------------------------------------------


app.get("/users/:id", async (req: Request, res: Response) => {
    try {
      const id = req.params.id
  
      console.log(await getActorById(id))
      res.end()

    } catch (error: any) {
        console.log(error.message)
      res.status(500).send("Unexpected error")
    }
  }) 

//---------------------------------------------------------------
/*
const searchActor = async (name:string) : Promise<any> => {
    const result = await connection.raw (`
    SELECT * FROM Actor WHERE name = "${name}"
    `)
    return result[0]
}

searchActor ('Tony Ramos')
.then (res => {
    console.log (res)
})
.catch (err => {
    console.log (err)
})
*/
//---------------------------------------------------------------

const countActor = async (gender: string) : Promise<any> => {
    const result = await connection.raw (`
    SELECT COUNT(*) as count FROM Actor WHERE gender = "${gender}"
    `)
    const count = result[0][0].count
    return count
}

/*
countActor ('male')
.then (res => {
    console.log (res)
})
.catch (err => {
    console.log (err)
})
*/

//------------------------------------------------------------------

const createActor = async (
  id: string,
  name: string,
  salary: number,
  dateOfBirth: Date,
  gender: string
): Promise<void> => {
  await connection
    .insert({
      id: id,
      name: name,
      salary: salary,
      birth_date: dateOfBirth,
      gender: gender,
    })
    .into("Actor");
};

const updateSalary = async (id: string, salary: number): Promise<any> => {
    await connection("Actor")
      .update({
        salary: salary,
      })
      .where("id", id);
};


const deleteActor = async (id: string): Promise<void> => {
  await connection("Actor")
    .delete()
    .where("id", id);
}; 


const avgSalary = async (gender: string): Promise<any> => {
    const result = await connection("Actor")
      .avg("salary as average")
      .where({ gender });
  
    return result[0].average;
};

//-------------------------------------------------------------

app.get ('/actor/:id', async (req: Request, res: Response) => { 
    try {
        const id = req.params.id 
        const actor = await getActorById(id)

        res.status(200).send(actor)

    } catch (error: any) {
        res.status(400).send({message: error.message})
    }
})

app.get("/actor", async (req: Request, res: Response) => {
    try {
      const count = await countActor(req.query.gender as string);
      res.status(200).send({
        quantity: count,
      });
    } catch (err: any) {
      res.status(400).send({
        message: err.message,
      });
    }
  });

  app.post("/actor", async (req: Request, res: Response) => {
    try {
      await createActor(
        req.body.id,
        req.body.name,
        req.body.salary,
        new Date(req.body.dateOfBirth),
        req.body.gender
      );
  
      res.status(200).send("Cadastrado");
    } catch (err: any) {
      res.status(400).send({
        message: err.message,
      });
    }
  });

  app.put("/actor", async (req: Request, res: Response) => {
    try {
      await updateSalary(req.body.id, req.body.salary);
      res.status(200).send({
        message: "Success",
      });
    } catch (err :any) {
      res.status(400).send({message: err.message });
    }
  });

app.delete("/actor/:id", async (req: Request, res: Response) => {
    try {

      await deleteActor(req.params.id);
      res.status(200).send('Deletado')

    } catch (err:any) {
      res.status(400).send({message: err.message,});
    }
}); 


const server = app.listen(process.env.PORT || 3003, () => {
    if (server) {
        const address = server.address() as AddressInfo
        console.log (`Server is running in http://localhost:${address.port}`)
    } else {
        console.error ('Failure upon starting server')
    }
})

