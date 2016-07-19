import React from 'react'
import ReactDOM from 'react-dom'
import { render } from 'react-dom'
import { Router, Route, hashHistory } from 'react-router'
import CreatePatient from './components/create-patient'
import App from './components/App'
import PatientList from './components/PatientList'
import InitialView from './components/Initial-View'
import Teste from './components/Teste'


render((
  <Router history={hashHistory}>
    <Route path="/" component={App}/>
  </Router>
), document.getElementById('app'))

