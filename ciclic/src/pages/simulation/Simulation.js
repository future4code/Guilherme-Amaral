import { useContext } from "react"
import { useNavigate } from "react-router-dom"
import GlobalContext from "../../global/GlobalContext"
import { ContainerInputs, ContainerMain, InputName, InputMonthy, InputTime } from "./styled"

import { postSimulation } from "../../requests/requests"

export const Simulation = () => {

    const { state } = useContext(GlobalContext)
    const navigate = useNavigate()

    return (

        <ContainerMain>
            <ContainerInputs>
                <h1>Simulador</h1>

                <InputName>
                    <label>
                        Nome:
                        <input
                            placeholder="Digite seu nome"
                            type="text"
                            onChange={(event) => state.setInputName(event.target.value)}
                            value={state.inputName}
                        />
                    </label>
                </InputName>

                <InputMonthy>
                    <label>
                        Mensalidade:
                        <input 
                            placeholder="Valor a poupar"
                            type="number"
                            onChange={(event) => state.setInputMonthy(event.target.value)}
                            value={state.inputMonthy}
                        />
                    </label>
                </InputMonthy>

                <InputTime>
                    <label>
                        Tempo:
                        <input 
                            placeholder="Em meses"
                            type="number"
                            onChange={(event) => state.setinputTime(event.target.value)} 
                            value={state.inputTime}
                        />
                    </label>
                </InputTime>

                <button onClick={() => postSimulation(state, navigate)}>
                    Simular
                </button>

            </ContainerInputs>
        </ContainerMain>
    )
}

export default Simulation