import React from 'react'
import ListItem from './List-Item'

export default class Sidebar extends React.Component{
	
	render () {
		return(
			<div class="container-fluid">
		      <div class="row">
		        <div class="col-sm-3 col-md-2 sidebar">
		          <ul class="nav nav-sidebar">

		            <ListItem patientName={this.props.patientName} />
		            
								
								
		          </ul>
		          
		        </div>
		       </div>
		      </div>

			);
	}

}

