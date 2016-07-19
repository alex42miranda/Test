import React from 'react'


import Sidebar from './sidebar'

export default class Teste extends React.Component {
    constructor(){
        super();
    this.state = {
        patientName: "Alexandre",
    }
}


changeName(patientName) {
    this.setState({patientName})
}

render() {
    return (
        <div>
            <Form changeName={this.changeName.bind(this)}  />
            <Sidebar changeName={this.changeName.bind(this)} patientName={this.state.patientName}/>
        </div>
        );
    }
}

