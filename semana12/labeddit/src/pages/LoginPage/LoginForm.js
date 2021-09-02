import React from 'react'
import {InputsContainer} from './styled'
import { TextField } from '@material-ui/core'
import useForm from '../../hooks/useForm'
import {BASE_URL} from '../../constantes/urls'
import axios from 'axios'
import { useHistory } from 'react-router-dom'
import { goToFeed } from '../../routers/cordinator'
import { ButtonEstilizado } from '../FeedPage/styled'


const LoginForm = () => {

    const history = useHistory()

    const [form, onChange, clear] = useForm({ email: "", password: ""})

    const onSubmitForm = (event) => {
        event.preventDefault()
        login()
          
    }

    const login = () => {
        axios.post (`${BASE_URL}/users/login`, form, {
            headers: {
                "Content-Type": "application/json"
            }
        })
        .then ((res) => {
            localStorage.setItem('token', res.data.token)
            goToFeed(history) 
            clear()
        })
        .catch ((err) => {
            alert (err.data)
        })
    }

    return (
            <InputsContainer>
                <form onSubmit={onSubmitForm}>
                    <TextField 
                        name={"email"}
                        value={form.email}
                        onChange={onChange}
                        label={"E-mail"}
                        variant={"outlined"}
                        fullWidth
                        margin ={'normal'}
                        required
                        type={"email"}
                    /> 

                    <TextField 
                        name={"password"}
                        value={form.password}
                        onChange={onChange}
                        label={"Senha"}
                        variant={"outlined"}
                        fullWidth
                        margin ={'normal'}
                        required
                        type={"password"}
                    /> 

                    <ButtonEstilizado
                        type={"subimit"}
                        fullWidth
                        variant={"contained"}
                        color={"primary"}
                    >
                        Login
                    </ButtonEstilizado>
                </form>
            </InputsContainer>
    )
}

export default LoginForm