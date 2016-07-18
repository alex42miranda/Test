import React from 'react'
import ReactDOM from 'react-dom'
import { render } from 'react-dom'
import { Router, Route, hashHistory } from 'react-router'
import Form from './components/Form'

import PatientData from './components/Patient-Data-Information'
import InitialView from './components/Initial-View'
import Teste from './components/Teste'

render((
  <Router history={hashHistory}>
    <Route path="/" component={Teste}/>
  </Router>
), document.getElementById('app'))

