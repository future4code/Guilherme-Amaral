import { data } from "../../data/data"
import { useState } from "react"

export const CardName = () => {

    const [list, setList] = useState([])

    const catchListData = () => {
        setList(data)
    }

    return (

        <>
            <h1>Renderização de lista</h1>
            <button onClick={catchListData}>Clique para exibir a Lista</button>

            {list.length > 0 ? <table>
                <thead>
                    <tr>
                        <th>Nome</th>
                        <th>Peso</th>
                        <th>Massa</th>
                        <th>Cabelo</th>
                        <th>Olhos</th>
                        <th>Aniversário</th>
                        <th>Genero</th>
                    </tr>
                </thead>
            </table> : <br />}
                
            {list.map(index => {
                return (

                    <tbody>
                        <td>{index.name}</td>
                        <td>{index.height}</td>
                        <td>{index.mass}</td>
                        <td>{index.hair_color}</td>
                        <td>{index.eye_color}</td>
                        <td>{index.birth_year}</td>
                        <td>{index.gender}</td>
                    </tbody>
                )
            })}
          
        </>
    )
}

export default CardName