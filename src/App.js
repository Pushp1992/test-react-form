import React from 'react';
import { Component } from 'react';

// custom component
import Table from './user-details/Table';
import Form from './view/Form';

class App extends Component {
    state  = {
        Details: []
    }

    removeDetails = (index) => {
        const {Details} = this.state;

        this.setState({
            Details: Details.filter((x, i) => {
                return i !== index;
            })
        });
    }

    handleSubmit = (Detail) => {
        this.setState({Details: [...this.state.Details, Detail]});
    }

    render() {
        return [
            <div className="container">
                <Table personDetails={this.state.Details}
                    removeDetails={this.removeDetails} />
            </div>,
            <br />,
            <Form handleSubmit={this.handleSubmit} />
        ]
    }
}

export default App;
