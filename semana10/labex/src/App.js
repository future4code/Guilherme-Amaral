import React from 'react'
import HomePage from './pages/HomePage'
import ListTripsPage from './pages/ListTripsPage';
import ApplicationFormPage from './pages/ApplicationFormPage';
import LoginPage from './pages/LoginPage';
import AdminHomePage from './pages/AdminHomePage';
import CreateTripPage from './pages/CreateTripPage';
import TripDetailsPage from './pages/TripDetailsPage';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

function App() {

  return (

    <div>
      
      <BrowserRouter>
        <Switch>

          <Route exact path={"/"}>
            <HomePage />
          </Route>

          <Route exact path={"/ListTripsPage"}>
            <ListTripsPage />
          </Route>

          <Route exact path={"/ApplicationFormPage"}>
            <ApplicationFormPage  />
          </Route>

          <Route exact path={"/LoginPage"}>
            <LoginPage />
          </Route>

          <Route exact path={"/AdminHomePage"}>
            <AdminHomePage />
          </Route>

          <Route exact path={"/CreateTripPage"}>
            <CreateTripPage />
          </Route>

          <Route exact path={"/TripDetailsPage"}>
            <TripDetailsPage />
          </Route>

        </Switch>
          
      </BrowserRouter>

    </div>
  );
}

export default App;
