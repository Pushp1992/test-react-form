import React, { Component } from 'react';  

class Form extends Component {
    constructor (props) {
        super(props);

        this.initialState = {
            name: '',
            profession: ''
        };

        this.state = this.initialState;
    }

    handleInputChange = (event) => {
        const{name, value} = event.target;

        this.setState({
            [name]: value
        });
    }

    submitForm = () => {
        this.props.handleSubmit(this.state);
        this.setState(this.initialState);
    }

    render() {
        
        const {name, profession} = this.state;

        return (
            <form>
                <div className="container">
                    <div>
                        <label>Name</label>
                        <input type="text" name="name" value={name} onChange={this.handleInputChange} />
                    </div>
                    <div>
                        <label>Profession</label>
                        <input type="text" name="profession" value={profession} onChange={this.handleInputChange} />
                    </div>
                    <div>
                        <input type="button" onClick={this.submitForm} value="Submit" />
                    </div>
                </div>
            </form>
        );
    }
}

export default Form;