import React from 'react'


export default class ListItem extends React.Component {

    render() {
       
        return(
            <li><a href="#">{this.props.patientName}</a></li>
        )
    }
}
   

