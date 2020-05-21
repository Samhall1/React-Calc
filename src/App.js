import React from 'react';
import './App.css';

class App extends React.Component {

  state = {
    numLeft: [],
    numLeftActive: true,
    operator: "",
    numRight: [],
    numRightActive: false,
    result: ""
  }

  setNumber = (n) => {
    // console.log("I clicked on the number ", n)
    if (this.state.numLeftActive) {
      let numUpdatedLeft = [...this.state.numLeft, n].join("");
      let numUpdatedLeftInt = parseInt(numUpdatedLeft);
      this.setState({
        numLeft: [numUpdatedLeftInt]
      }); 
    } else if (this.state.numRightActive) {
      let numUpdatedRight = [...this.state.numRight, n].join("");
      let numUpdatedRightInt = parseInt(numUpdatedRight);
      this.setState({
        numRight: [numUpdatedRightInt] 
      });
    }
  }
  
  setOperator = (o) => {
    // console.log("I clicked on the operator " + o);
    this.setState({
      numLeftActive: false,
      operator: o,
      numRightActive: true,
    })
  }

  setClear = () => {
    this.setState({
      numLeft: [],
      numLeftActive: true,
      operator: "",
      numRight: [],
      numRightActive: false,
      result: ""
    })
  }

  setResult = () => {
    if( this.state.numLeft && this.state.numRight ) {
      let finalResult = 0;
      if( this.state.operator === "+" ) {
        finalResult = + this.state.numLeft + + this.state.numRight;
      } else if( this.state.operator === "-" ) {
        finalResult = this.state.numLeft - this.state.numRight;
      } else if( this.state.operator === "x" ) {
        finalResult = this.state.numLeft * this.state.numRight;
      } else {
        finalResult = this.state.numLeft / this.state.numRight;
      }
      this.setState({
        result: finalResult
      });
    }
  }
 

  render() {
    // console.log("My current state is");
    // console.log(this.state);
    return (
      <div className="container">
        <h1>Sam's Calculator</h1>
        <div className="numEntered">{}</div>
        <div className="result" >{this.state.result}</div>
        <div onClick={() => this.setNumber(1)}>1</div>
        <div onClick={() => this.setNumber(2)}>2</div>
        <div onClick={() => this.setNumber(3)}>3</div>
        <div onClick={() => this.setNumber(4)}>4</div>
        <div onClick={() => this.setNumber(5)}>5</div>
        <div onClick={() => this.setNumber(6)}>6</div>
        <div onClick={() => this.setNumber(7)}>7</div>
        <div onClick={() => this.setNumber(8)}>8</div>
        <div onClick={() => this.setNumber(9)}>9</div>
        <div onClick={() => this.setNumber(0)}>0</div>
        <div onClick={() => this.setOperator("+")}>+</div>
        <div onClick={() => this.setOperator("-")}>-</div>
        <div onClick={() => this.setOperator("x")}>x</div>
        <div onClick={() => this.setOperator("/")}>/</div>
        <div onClick={() => this.setClear()}>C</div>
        <div onClick={this.setResult}>=</div>
      </div>
    )
  }
}
export default App;


