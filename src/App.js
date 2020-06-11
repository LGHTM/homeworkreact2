import React, { Component } from "react";
import "./App.css";
import {Form} from "./Form";
import {NumberApp} from "./PhoneNumber";

class App extends Component {
  render() {
    return (
      <div className="App">
        <NumberApp/>
        <Form onSignUp={(user)=>console.log(user.cvv, user.number)} />  
      </div>
    );
  }
}

export default App;
