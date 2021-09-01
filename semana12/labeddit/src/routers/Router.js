import React from 'react'
import LoginPage from '../pages/LoginPage/LoginPage'
import SignUpPage from '../pages/SingUpPage/SignUpPage'
import FeedPage from '../pages/FeedPage/FeedPage'
import PostPage from '../pages/PostPage/PostPage'
import ErrorPage from '../pages/ErrorPage/ErrorPage'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Header from '../componentes/Header'


const Router = () => {
    return (
        <BrowserRouter>
        <Header />
            <Switch>

                <Route exact path="/login">
                    <LoginPage/>
                </Route>

                <Route exact path="/cadastro">
                    <SignUpPage/>
                </Route>

                <Route exact path="/">
                    <FeedPage/>
                </Route>

                <Route exact path="/post">
                    <PostPage/>
                </Route>

                <Route>
                    <ErrorPage/>
                </Route>

            </Switch>
        </BrowserRouter>
        
    )
}

export default Router