import React from 'react'
import ReactDOM from 'react-dom'
import { render } from 'react-dom'
import { Router, Route, hashHistory } from 'react-router'
import Form from './components/Form'
import Sidebar from './components/sidebar'
import PatientData from './components/Patient-Data-Information'

render((
  <Router history={hashHistory}>
    <Route path="/" component={Form}/>
    <Route path="/patientsnames" component={Sidebar}/>
    <Route path="/patientdata" component={PatientData}/>
  </Router>
), document.getElementById('app'))

