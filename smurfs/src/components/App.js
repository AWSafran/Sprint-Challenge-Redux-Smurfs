import React, { Component } from 'react';
import { getSmurfs } from '../actions'
import './App.css';
import { connect } from 'react-redux';

/*
 to wire this component up you're going to need a few things.
 I'll let you do this part on your own. 
 Just remember, `how do I `connect` my components to redux?`
 `How do I ensure that my component links the state to props?`
 */
class App extends Component {

  componentDidMount(){
    this.props.getSmurfs();
  }

  render() {
    console.log("the state of app.js is", this.state);
    return (
      <div className="App">
        {this.props.smurfs.map(smurf => 
        <div>
          <h2>{smurf.name}</h2>
          <p>{smurf.age} years old</p>
          <p>{smurf.height}</p>  
        </div>)}
      </div>
    );
  }
}

const mapStateToProps = state =>{
  console.log("Mapstatetoprops");
  console.log(state);
  return{
    smurfs: state.smurfs
  }
}

export default connect(mapStateToProps, { getSmurfs })(App);
