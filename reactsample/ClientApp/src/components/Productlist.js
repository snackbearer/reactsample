import React, { Component } from 'react';

export class Productlist extends Component {
    static displayName = Productlist.name;
    
    constructor(props) {

        super(props);
        this.state = {
            initialValue: "",
            copyValue: "",
            value: ''
        };
        this.copytheValue = this.copytheValue.bind(this);
        this.handleChange = this.handleChange.bind(this);
        //this.handleChange1 = this.handleChange1.bind(this);
    }

    handleChange(event) {
        this.setState({ [event.target.name]: event.target.value });
        //this.setState({ initialValue: event.target.value });

    }
    
    copytheValue() {
        this.setState({
            copyValue: this.state.initialValue
        });
    }

    render() {
        return (
            <div>
                <h1>Product List</h1>
                <p>First Value</p>
                <input type="text" name="initialValue" value={this.state.initialValue} onChange={this.handleChange} ></input>
                <p>Second Value</p>
                <input type="text" name="copyValue" value={this.state.copyValue} onChange={this.handleChange} ></input>
                <button className="btn btn-primary" onClick={this.copytheValue}>Copy Value</button>
            </div>
        );
    }
}
