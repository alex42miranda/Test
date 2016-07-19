import React from 'react'
import CreatePatient from './create-patient'
import PatientList from './PatientList'

const patients = [
    {
        name: "Alexandre"
    },
    {
        name: "Felipe"
    }
];
export default class App extends React.Component{
   

    constructor(props) {
        super(props);
        this.state = {
           patients
        }
    }

  

    render() {
        return (
            <div>
            <h1> Teste Cadastro de Paciente </h1>

            <CreatePatient createPatient={this.createPatient.bind(this)} />
            <PatientList patients={this.state.patients}  />
            
            </div>
        )
    }

    createPatient(name) {
        this.state.patients.push({
            name
        });
        this.setState({ patients: this.state.patients });
        
    }
}