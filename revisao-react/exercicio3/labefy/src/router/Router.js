import { BrowserRouter, Route, Switch } from "react-router-dom"
import GetPlayList from '../pages/getPlaylist/getPlaylists'
import CreatePlayLists from '../pages/createPlaylist/CreatePlaylist'

import SlideBar from "../components/slideBar/SlideBar"

export const Router = () => {

    return (

        <BrowserRouter>
            <SlideBar />
            <Switch>
                <Route exact path="/">
                    <GetPlayList />
                </Route>

                <Route exact path="/create">
                    <CreatePlayLists />
                </Route>
            </Switch>
        </BrowserRouter>

    )
}

export default Router