import { useContext } from "react"
import { useNavigate } from "react-router-dom"
import GlobalContext from "../../global/GlobalContext"
import { ContainerMain, ContainerResult } from "./styled"

export const ResultSimulation = () => {

    const navigate = useNavigate()
    const { state } = useContext(GlobalContext)

    const clearDatesAndGoBack = (navigate) => {
        state.setInputName ("")
        state.setInputMonthy("")
        state.setinputTime("")
        state.setResult("")
        navigate ('/')
    }

    return (

        <ContainerMain>
            <ContainerResult>
                <h1>{`Olá ${state.data.name},`}</h1>

                <p>{`juntando ${new Intl.NumberFormat('pt-BR', {
                    style: 'currency',
                    currency: 'BRL'
                }).format(state.data.monthy)} por mês, você terá`}
                </p>

                <h2>{` ${new Intl.NumberFormat('pt-BR', {
                    style: 'currency',
                    currency: 'BRL'
                }).format(state.data.result)}`}
                </h2>
                
                <p>{`em ${state.data.time} meses.`}</p>

                <button onClick={() => clearDatesAndGoBack(navigate)}>Simular novamente</button>
            </ContainerResult>
        </ContainerMain>
    )
}

export default ResultSimulation