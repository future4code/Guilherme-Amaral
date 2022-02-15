import axios from "axios"
import { toast } from "react-toastify"

export const postSimulation = (state, navigate) => {
    
    const body = { "expr": `${state.inputMonthy} * (((1 + 0.00517) ^ ${state.inputTime} - 1) / 0.00517)` }
    
    axios.post('http://api.mathjs.org/v4/', body, {

        headers: {
        "Content-Type": "application/json"
    }

    })
    .then((res) => {
        state.setResult(res.data.result)
        navigate ('/result')
    })

    .catch((err) => {
        toast.error( err.message, {
            theme: "colored"
        })
        toast.warn("Digite os campos para fazer a simulação!", {
            theme: "colored"
        })
    })
}