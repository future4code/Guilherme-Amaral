import app from "./app"
import { buscarFilmePersonagem } from "./endpoints dados my sql/buscarFilmePersonagem"
import { buscarPersonagens2 } from "./endpoints dados my sql/buscarPersonagens2"
import { buscarTodos } from "./endpoints dados my sql/buscarTodos"
import { criarPersonagem } from "./endpoints dados my sql/criarPersonagem"
import { deletarPersonagem } from "./endpoints dados my sql/deletarPersonagem"
import { deleteCharacter } from "./endpoints/deleteCharacter"
import { getAllCharacters } from "./endpoints/getAllCharacters"
import { getCreateCharacter } from "./endpoints/getCreateCharacter"

app.get ("/character", getAllCharacters)
app.put ("/character/create", getCreateCharacter)
app.delete ("/character/delete/:id", deleteCharacter )

app.get ("/buscarTodos", buscarTodos)
app.delete ("/deletarPersonagem/:id", deletarPersonagem)
app.post ("/criarPersonagem", criarPersonagem)
app.get ("/filme/:id/Personagem", buscarFilmePersonagem)
app.get("/buscarPersonagens2", buscarPersonagens2 )