import React, { Component } from "react";
import "./Form.css";
import PropTypes from "prop-types";

export class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      number: "",
      cvv: "",
      name: "",
      dataMount: "",
      dataYears: "",
      dataError: false,
      numberError: false,
      cvvError: false,
      errorMessages: [],
    };
  }

  onChangeNumber = (e) => {
    let value = e.target.value;
    this.setState({ number: e.target.value });
    // const re = /^[0-9\b]+$/;
    // if (value.length <= 4 && value.test/re/g) {
    //   this.setState({ number: e.target.value });
    // } else {
    //   return;
    // }
  };

  onChangeName = (e) => {
    if (e.target.value.test("/^[A-Za-z0-9]+$/g")) {
      this.setState({ cvv: e.target.value });
    } else {
      return;
    }
  };

  onChange = (e) => {
    let value = e.target.value;

    // value = value.substr(0, 7);
    this.setState({
      number: value,
    });
  };

  onChangeСVV = (e) => {
    this.setState({ cvv: e.target.value });
  };

  render() {
    const { cvv } = this.state;
    return (
      <div className={"card"}>
        <form onSubmit={(e) => e.preventDefault()}>
          <label htmlFor="">
            Номер карты
            <input
              maxLength={16}
              className={this.state.numberError ? "error" : ""}
              value={this.state.number}
              onChange={this.onChangeNumber}
            />
          </label>
          <label htmlFor="">
            Имя владельца 
            <input
              value={this.state.name}
              onChange={(e) => {
                this.setState({ name: e.target.value });
              }}
            />
          </label>
          <label htmlFor="" className={"data"}>
            Дейсвует до
            <input
              maxLength={2}
              className={this.state.dataError ? "error" : ""}
              value={this.state.dataMount}
              onChange={(e) => this.setState({ dataMount: e.target.value })}
            />
            /
            <input
              maxLength={2}
              className={this.state.dataError ? "error" : ""}
              value={this.state.dataYears}
              onChange={(e) => this.setState({ dataYears: e.target.value })}
            />
          </label>
          <label htmlFor="">
            CVV
            <input
              maxLength={4}
              className={this.state.cvvError ? "error" : ""}
              value={cvv || ""}
              onChange={this.onChangeСVV}
            />
          </label>
          <button
            onClick={() => {
              console.log(new Date().getFullYear().toString().substr(-2));
              let nextState = {
                cvvError: this.state.cvv.trim() === "",
                numberError: this.state.number.trim() === "",
                dataError:
                  this.state.dataYears <
                  new Date().getFullYear().toString().substr(-2),
                errorMessages: [],
              };

              if (nextState.numberError) {
                nextState.errorMessages.push("Логин должен быть заполнен");
              }

              if (nextState.cvvError) {
                nextState.errorMessages.push("Код должен быть заполнен");
              }

              this.setState(nextState);
              // if (nextState.cvvError || nextState.numberError)
              if (!Object.values(nextState).includes(true)) {
              } else {
                this.props.onSignUp({
                  cvv: this.state.cvv,
                  number: this.state.number,
                  dataMount: this.state.number,
                  dataYears: this.state.number,
                });
              }
            }}
          >
            добавить карту
          </button>
        </form>
      </div>
    );
  }
}

export default Form;
