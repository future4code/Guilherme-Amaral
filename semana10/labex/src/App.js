import React from 'react'
import HomePage from './pages/HomePage'
import ListTripsPage from './pages/ListTripsPage';
import ApplicationFormPage from './pages/ApplicationFormPage';
import LoginPage from './pages/LoginPage';
import AdminHomePage from './pages/AdminHomePage';
import CreateTripPage from './pages/CreateTripPage';
import TripDetailsPage from './pages/TripDetailsPage';
import styled from 'styled-components';



function App() {

  return (

    <div>
  
      <HomePage />
      <ListTripsPage />
      <ApplicationFormPage />
      <LoginPage />
      <AdminHomePage />
      <CreateTripPage />
      <TripDetailsPage />

    </div>
  );
}

export default App;
