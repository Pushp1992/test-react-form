import React, { Component } from 'react';

const TaableHeader = () => {
    return (
        <thead>
            <tr>
                <th>Name</th>
                <th>Job</th>
                <th>Remove</th>
            </tr>
        </thead>
    );
}

const TableBody = (props) => {
    const rows = props.personDetails.map((row, index) => {
        return(
            <tr key={index}>
                <td>{row.name}</td>
                <td>{row.Job}</td>
                <td><button className="btn btn-primary" onClick={() => props.removeDetails(index)}>Delete</button></td>
            </tr>
        );
    });

    return (
        <tbody>{rows}</tbody>
    );
}

class Table extends Component {
    render() {

        const { personDetails, removeDetails } = this.props;
        
        return (
            <table>
                <TaableHeader />
                <TableBody personDetails={personDetails}
                    removeDetails={removeDetails} />
            </table>
        );
    }
}

export default Table;