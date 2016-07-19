import React from 'react'
import { Link } from 'react-router'

export default class InitialView extends React.Component{
  render() {
    return (
      <div>
        <h1>Sistema de Cadastro de Pacientes</h1>
        <ul role="nav">
          <li><Link to="/patientsnames">Lista de Pacientes</Link></li>
          <li><Link to="/patientregister">Cadastrar Novo PAciente</Link></li>

        </ul>
      </div>
    )
  }
}