import React from 'react'
import _ from 'lodash'
import PatientListItem from './patient-list-item'


export default class PatientList extends React.Component{
renderItems() {
	return _.map(this.props.patients, (patient,index) => <PatientListItem key={index} {...patient} />);
}
render () {
	
		return (
		<table>
			<h1> Lista de Pacientes </h1>
			<tbody>
			{this.renderItems()}
			</tbody>
		</table>
			);
	}

	}
	

