import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import TelaInicial from '../TelaInicial/TelaInicial';
import TelaJogo from '../TelaJogo/TelaJogo'


const Router = () => {

    return (

        <BrowserRouter> 
        <Switch>
  
            <Route exact path="/">
              <TelaInicial />
            </Route>
  
            <Route exact path="/jogo">
              <TelaJogo />
            </Route>
  
        </Switch>
        
      </BrowserRouter>

    )
}

export default Router