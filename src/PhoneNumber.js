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
      errormessage: "",
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
    let message = this.state.errormessage;
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
    if (value.substr(0, 4) !== "+375") {
      numberValid = false;
      message = 'номер должен начинаться с +375';
    } else if (
      value.substr(4, 2) !== "29" &&
      value.substr(4, 2) !== "44" &&
      value.substr(4, 2) !== "33" &&
      value.substr(4, 2) !== "33" &&
      value.substr(4, 2) !== ""
    ) {
      numberValid = false;
      message = "введите правильный код 29, 44, 33, 25";
    } else {
      numberValid = true;
      message = "";
    }
    console.log(value.substr(4, 2));
    fieldValidationErrors.number = numberValid ? "" : message;
    console.log(numberValid);
    if (numberValid) {
      console.log("eee");
      this.setState(
        { formErrors: fieldValidationErrors, numberValid: numberValid },
        this.validateForm
      );
    }
  }

  validateForm = () => {
    this.setState({ formValid: this.state.numberValid });
  };

  render() {
    return (
      <>
        <form>
          <input
            maxLength={13}
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
