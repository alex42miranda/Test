import React from 'react'

export default class Form extends React.Component{
	handleSubmit(e) {
		e.preventDefault();
			console.log(this.refs.PatientName.value);
			console.log(this.refs.PatientDisease.value);
			console.log(this.refs.PatientPresentIllness.value);
			
		}
	render () {
		return (
		<form onSubmit={this.handleSubmit}>
			<ul>
				<li>
					<label> Nome do Paciente </label>
					<input type="text" ref="PatientName" placeholder="nome do paciente"/>
					
				</li>
				<li>
					<label> Doença 
					<input type="text" ref="PatientDisease" placeholder="disease"/>
					</label>
				</li>
				<li>
					<label> Histórico 
					<input type="text" ref="PatientPresentIllness" placeholder="historia do paciente"/>
					</label>
				</li>
				

				<li>
					<button type="submit"> Submit </button>
				</li>
			</ul>
				
	</form>
			)
	}
}
