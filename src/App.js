import React, { Component } from 'react';
import './App.css';
import { Button, Jumbotron } from 'react-bootstrap';
class App extends Component {
  constructor(props){
    super(props);
    this.state={
      count : 1
    }
  }

  // adding one to the state

  onClickAdd = () => {
    this.setState({ count : this.state.count + 1})
  }

  // subtracting 1 from the state

  onClickSubtract = () => {
    this.setState({ count : this.state.count - 1})
  }

  // restores state's default value

  onClickReset = () => {
    this.setState({ count : 1})
  }

  // function that renders counter background color according to state change

  applyColor = () => {       
    const { count } = this.state;
    if(count === 0){
      return 'danger';
    } else if( count === 10){
      return 'happy';
    } else{
      return 'normal'
    }
  }
  render() {

    //destructuring count from this.state

    let { count } = this.state;
    return (
      // inline styles are not recommended, I recommend to keep all your css in 
      // a different file
      <div>
        <h1 style={{ textAlign : 'center'}}>React Counter</h1>
        <div style={{ textAlign : 'center'}}>
          <Button bsStyle="warning" onClick={this.onClickReset}>
            Reset
          </Button>
        </div>
        <div style={{ 
          display: 'flex', 
          justifyContent: 'center', 
          alignItems: 'center', 
          height:'500px'
        }}>
          <Button bsStyle="primary" onClick={this.onClickAdd}>+</Button>
          <Jumbotron className={this.applyColor()}>
            <h1 style={{ textAlign: 'center'}}>{count}</h1>
          </Jumbotron>
          <Button bsStyle="danger" onClick={this.onClickSubtract}>-</Button>
        </div>
      </div>
    );
  }
}

export default App;
