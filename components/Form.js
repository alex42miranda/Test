import React from 'react'

export default class Form extends React.Component{
	
		handlePatientDisease(e){
			this.setState({
				patientdisease: e.target.value
			})
		}
			handlePatientPresentIllness(e){
			this.setState({
				patientpresentillness: e.target.value
			})
		}
		handlePatientName(e){
		let patientName = e.target.value
		this.setState({ patientName })
		this.props.onPatientNameChange.value
	}

	handleSubmit(e){
		e.preventDefault();
		console.log("Patient name changed to:", patientName.value)
		}
		
	render () {
		return (
		<form onSubmit={this.handleSubmit}> 
			<ul>
				<li>
					<label> Nome do Paciente </label>
					<input type="text" name="patientName" id="patientName" placeholder="nome do paciente"  onChange={this.handlePatientName.bind(this)} />
					
				</li>
				<li>
					<label> Doença 
					<input type="text" name="patientdisease" placeholder="disease"/>
					</label>
				</li>
				<li>
					<label> Histórico 
					<input type="text" name="patientpresentillness" placeholder="historia do paciente"/>
					</label>
				</li>
				

				<li>
					<button type="submit"> Submit </button>
				</li>
			</ul>
				
	</form>
			);
	}
	

}