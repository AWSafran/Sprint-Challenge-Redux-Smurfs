import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addSmurf } from '../actions';

class NewSmurf extends Component {
    constructor(props){
        super(props);
        this.state = {
            name: '',
            age: '',
            height: ''
        }
    }

    handlechanges = e =>{
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    submitSmurf = e =>{
        e.preventDefault();
        console.log("submitting");
        const newSmurf = {
            name: this.state.name,
            age: this.state.age,
            height: this.state.height
        }

        this.props.addSmurf(newSmurf);

    }


    render(){
        return(
            <form onSubmit={e => this.submitSmurf(e)}>
                <label>
                    Name:
                    <input onChange={e => this.handlechanges(e)} type='text' value={this.state.name} name='name' />
                </label>
                <label>
                    Age:
                    <input onChange={e => this.handlechanges(e)} type='text' value={this.state.age} name='age' />
                </label>
                <label>
                    Height:
                    <input onChange={e => this.handlechanges(e)} type='text' value={this.state.height} name='height' />
                </label>
                <input type='submit' />
            </form>
        );
    }
}

export default connect(null, {addSmurf})(NewSmurf);