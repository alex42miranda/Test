import React from 'react'
import ListItem from './List-Item'

export default class Sidebar extends React.Component{
	
	render () {
		var createItem = function(item) {
			return <li key={item.id}>{item.text}</li>;
		}
		return(
			<div class="container-fluid">
		      <div class="row">
		        <div class="col-sm-3 col-md-2 sidebar">
		          <ul class="nav nav-sidebar">

		          <li> Alexandre </li>
		          

								
								
		          </ul>
		          
		        </div>
		       </div>
		      </div>

			);
	}

}

