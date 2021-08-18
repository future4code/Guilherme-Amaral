import React, { useState, useEffect } from 'react'
import HomePage from './pages/HomePage'
import ListTripsPage from './pages/ListTripsPage';
import ApplicationFormPage from './pages/ApplicationFormPage';
import LoginPage from './pages/LoginPage';
import AdminHomePage from './pages/AdminHomePage';
import CreateTripPage from './pages/CreateTripPage';
import TripDetailsPage from './pages/TripDetailsPage';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import axios from 'axios';

function App() {

  const [viagens, setviagens] = useState ([])

  const getTrips = () => {

    axios.get ('https://us-central1-labenu-apis.cloudfunctions.net/labeX/guilherme-amaral-lovelace/trips')

    .then ((res) => {
      setviagens (res.data.trips)
      console.log(res.data.trips)
    })
    .catch ((err) => {
      alert (err.data)
    })
  }

  useEffect(() => {

    getTrips()

  }, [])

  const getTripDetail = (id) => {

    axios.get (`https://us-central1-labenu-apis.cloudfunctions.net/labeX/guilherme-amaral-lovelace/trip/${id}`, {
      
    headers: {

      Authorization: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IkNmbjZPd0YyOVU5TDJSYzV0UWo1IiwiZW1haWwiOiJhc3Ryb2RldkBnbWFpbC5jb20uYnIiLCJpYXQiOjE1NzMxNDM4Njh9.mmOrfGKlXpE3pIDUZfS3xV5ZwttOI2Exmoci9Sdsxjs"
      }
    })

    .then ((res) => {
      console.log (res)
  
    })
    .catch ((err) => {
      console.log (err)
    })

  }


  return (

    <div>
      
      <BrowserRouter>
        <Switch>

          <Route exact path={"/"}>
            <HomePage />
          </Route>

          <Route exact path={"/trips/list"}>
            <ListTripsPage viagens={viagens}/>
          </Route>

          <Route exact path={"/trips/application"}>
            <ApplicationFormPage  viagens={viagens}/>
          </Route>

          <Route exact path={"/login"}>
            <LoginPage />
          </Route>

          <Route exact path={"/admin/trips/list"}>
            <AdminHomePage viagens={viagens} getTripDetail={getTripDetail}/>
          </Route>

          <Route exact path={"/admin/trips/create"}>
            <CreateTripPage />
          </Route>

          <Route exact path={"/admin/trips/:id"}>
            <TripDetailsPage />
          </Route>

        </Switch>
          
      </BrowserRouter>

    </div>
  );
}

export default App;
