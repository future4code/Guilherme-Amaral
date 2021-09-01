import React from 'react'
import {InputsContainer} from './styled'
import { Button, TextField } from '@material-ui/core'
import useForm from '../../hooks/useForm'
import { useHistory } from 'react-router-dom'


const SignUpForm = () => {

    const history = useHistory()

    const [form, onChange, clear] = useForm({ name: "", email: "", password: ""})

    const onSubmitForm = (event) => {
        event.preventDefault()
        console.log (form)
     
    }


    return (
        <div>
            <InputsContainer>
                <form onSubmit={onSubmitForm}>

                <TextField 
                        name={"name"}
                        value={form.name}
                        onChange={onChange}
                        label={"Nome"}
                        variant={"outlined"}
                        fullWidth
                        margin ={'normal'}
                        required
                        type={"text"}
                    /> 
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

                    <Button
                        type={"subimit"}
                        fullWidth
                        variant={"contained"}
                        color={"primary"}
                    >
                        Login
                    </Button>
                </form>
            </InputsContainer>
        </div>
    )
}

export default SignUpForm