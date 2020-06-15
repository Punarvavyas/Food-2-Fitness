import React, { useState } from "react";
import ReactDOM from "react-dom";
import "./bmi.css";

class bmi extends React.Component {
  state = {
    result: "",
    height: "",
    weight: "",
    bmi: "",
    checkHealth: ""
  };
  calBmi = () => {
    const { height, weight } = this.state;
    console.log(height);

    const calcBmi = (weight / (height / 100) ** 2).toFixed(2);
    this.setState({
      bmi: calcBmi
    });

    console.log(this.state.bmi);
    let status = "";
    let resultDisplay =
      this.state.bmi > 25
        ? (status = <p>overwieght</p>)
        : (status = <p>perfect</p>);
    this.setState({
      result: resultDisplay
    });
  };
  clearAll = () => {
    console.log("test");
    this.setState({
      height: "",
      weight: "",
      bmi: "",
      result: ""
    });
  };

  render() {
    return (
      <div className="App">
        <div className="container">
          {" "}
          <div className="ui card">
            <div className="field">
              <div className="two fields">
                <div class="field">
                  <label>Height: </label>
                  <input
                    type="number"
                    placeholder="Height in centimeters"
                    value={this.state.height}
                    onChange={e => this.setState({ height: e.target.value })}
                  />
                </div>
                <br />
                <div className="field">
                  <label>Weight: </label>

                  <input
                    type="number"
                    placeholder="Weight in Kgs"
                    value={this.state.weight}
                    onChange={e => this.setState({ weight: e.target.value })}
                  />
                </div>
              </div>
              <button className="ui button" tabindex="0" style={{backgroundColor:"#000000"}}onClick={this.calBmi}>
                Check
              </button>
              <button
                className="ui button"
                tabindex="1" style={{backgroundColor:"#000000"}}
                onClick={this.clearAll}
              >
                Clear Entered data
              </button>
            </div>
            <p className="bmi-display">{` Your BMI is ${this.state.bmi}`}</p>
            <p className="result-display">{this.state.result}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default bmi;

const rootElement = document.getElementById("root");
ReactDOM.render(<bmi />, rootElement);