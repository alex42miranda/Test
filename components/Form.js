import React from 'react'

export default class form extends React.Component{
		handleSubmit(e){
		e.preventDefault();
		}

		handlePatientName(e) {
			this.setState({
				patientname: e.target.value
			})
		}
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
		
	render () {
		return (
		<form> 
			<ul>
				<li>
					<label> Nome do Paciente </label>
					<input type="text" name="patientname" placeholder="nome do paciente"  OnChange={this.handlePatientName} />
					
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
					<button type="button" onClick={this.handleSubmit}> Submit </button>
				</li>
			</ul>
				
	</form>
			);
	}

}