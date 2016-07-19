import React from 'react'


export default class PatientList extends React.Component{

render () {
	
		return (
		<form onSubmit={this.handleCreate.bind(this)}>
            <input type="text" placeholder="Nome do Paciente" ref="createInput" />
            <button> Create </button>
        </form>
			);
	}
    handleCreate(e){
        e.preventDefault();
        this.props.createPatient(this.refs.createInput.value);
        this.refs.createInput.value= '';
    }

	}
	

