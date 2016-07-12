import React from 'react'
import patientName from './Form'

export default class Sidebar extends React.Component{
	handlePatientNameChange(patientName){
		console.log("Patient name changed to:", patientName)
	}
	
	render () {
		return(
			<div class="container-fluid">
		      <div class="row">
		        <div class="col-sm-3 col-md-2 sidebar">
		          <ul class="nav nav-sidebar">

		            <li><a href="#" onPatientNameChange={this.handlePatientNameChange.bind(this)}></a></li>
		            

								
								
		          </ul>
		          
		        </div>
		       </div>
		      </div>

			);
	}

}

