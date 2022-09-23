import { Component } from "react";

//import Hello from './Components/Hello';
//import Counter from './Components/Counter';
//import Say from './Components/Say';
//import EventPractice3 from "./Components/EventPractice3";
//import ValidationSample from "./Components/Validation/Validation";
//import ScrollBox from "./Components/ScrollBox";
//import IterationSample from "./Components/IterationSample";
//import Info from "./Components/Info";
//import LifeCycleSample from "./Components/LifeCycleSample";
//import ErrorBoundary from "./Components/ErrorBoundary";
//import Counter2 from "./Components/Counter2";
//import Info2 from "./Components/Info2";
//import Counter3 from "./Components/Counter3";
//import Info3 from "./Components/Info3";
//import Average from "./Components/Average";

import SassComponent from "./Components/SassComponent";

/*function getRandomColor() {
  return '#' + Math.floor(Math.random() * 16777215).toString(16)
}

class App extends Component {
  state = {
    color: '#000000'
  }
  
  handleClick = () => {
    this.setState({
      color: getRandomColor()
    })
  }

  render() {
    return (
      <div>
        <button onClick={this.handleClick}>랜덤 색상</button>
        <ErrorBoundary>
          <LifeCycleSample color={this.state.color}/>
        </ErrorBoundary>
      </div>
    )
  }
}
*/

/*
const App = () => {
  return <Average/>
}
*/

class App extends Component {
  render() {
    return (
      <div>
        <SassComponent />
      </div>
    )
  }
}
export default App;
