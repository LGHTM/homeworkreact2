import React, { Component } from "react";
import { render } from "@testing-library/react";
import { FormErrors } from "./ErrorPhoneNumber";

export class NumberApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      number: "+375",
      formErrors: { number: "" },
      numberValid: false,
      formValid: false,
    };
  }

  handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    this.setState({ [name]: value }, () => {
      this.validateField(name, value);
    });
  };

  validateField(fieldName, value) {
    // /^(\+)?(\(\d{2,3}\) ?\d|\d)(([ \-]?\d)|( ?\(\d{2,3}\) ?)){5,12}\d$/
    let fieldValidationErrors = this.state.formErrors;
    let numberValid = this.state.numberValid;
    let message = "";
    // switch (fieldName) {
    //   case "number":
    //     // else if (value.substr(3,2) !== '29' || '33') {
    //     //   message = 'код номера должен быть 29 или'
    //     //   numberValid=false;
    //     // }
    //     // numberValid = value.match(/^(\+)(\(\d{3}\) ?\d|\d)(([ \-]?\d)|( ?\(\d{2,3}\) ?)){5,12}\d$/i);
    //     if(value.substr(0,3) !== '+375'){
    //       message = 'номер должен начинаться с +375'
    //       numberValid=false;
    //       console.log('2')
    //     } else {
    //       message = ''
    //       console.log('1')
    //       numberValid=true
    //     };
    //     // console.log(message)
    //     // console.log(numberValid)
    //     fieldValidationErrors.number = numberValid ? "" : message;
    //     break;
    //   default:
    //     break;
    // }
    if (value.substr(0, 3) !== "+375") {
      message = "номер должен начинаться с +375";
      numberValid = false;
      console.log("2");
    } else {
      message = "";
      console.log("1");
      numberValid = true;
    }
    // console.log(message)
    // console.log(numberValid)
    fieldValidationErrors.number = numberValid ? "" : message;
    console.log(numberValid)
    this.setState(
      { formErrors: fieldValidationErrors, numberValid: numberValid },
      this.validateForm
    );
  }

  validateForm() {
    this.setState({ formValid: this.state.numberValid });
  }

  render() {
    return (
      <>
        <form>
          <input
            maxLength={16}
            value={this.state.number}
            name="number"
            onChange={this.handleChange}
          />
        </form>
        <div>
          <FormErrors formErrors={this.state.formErrors} />
        </div>
      </>
    );
  }
}

export default NumberApp;
