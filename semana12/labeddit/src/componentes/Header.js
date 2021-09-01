import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Button from '@material-ui/core/Button'
import { StyledToolbar, Img } from './styled'
import { useHistory } from 'react-router'
import logobranco from '../assets/logobranco.png'
import { goToLogin } from '../routers/cordinator'

const Header = () => {

    const history = useHistory()

  return (
      <AppBar position="static">
        <StyledToolbar>
            <Button color="inherit"><Img src={logobranco}/>LabEddit</Button>
            <Button onClick={() => goToLogin(history)} color="inherit">Login</Button>
        </StyledToolbar>
      </AppBar>
  )
}

export default Header