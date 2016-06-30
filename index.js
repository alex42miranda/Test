import React from 'react'
import ReactDOM from 'react-dom'
import { render } from 'react-dom'
import { Router, Route, hashHistory } from 'react-router'
import Form from './components/Form'
import Sidebar from './components/sidebar'
import PatientData from './components/Patient-Data-Information'
import InitialView from './components/Initial-View'

render((
  <Router history={hashHistory}>
    <Route path="/" component={InitialView}/>
    <Route path="/patientsnames" component={Sidebar}/>
    <Route path="/patientdata" component={PatientData}/>
    <Route path="/patientregister" component={Form} />
  </Router>
), document.getElementById('app'))

