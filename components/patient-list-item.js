import React from 'react'

export default class PatientListItem extends React.Component {
    render() {
        return (
            <tr>
                <td> {this.props.name}</td>
            </tr>
        );
    }
}