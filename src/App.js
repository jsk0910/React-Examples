//import { Component } from "react";

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

//import SassComponent from "./Components/SassComponent";

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

/*
class App extends Component {
  render() {
    return (
      <div>
        <SassComponent />
      </div>
    )
  }
}
*/

/*
// Todo Application Example
import { useReducer, useRef, useCallback } from "react";

import TodoTemplate from "./Components/todoApp/TodoTemplate";
import TodoInsert from "./Components/todoApp/TodoInsert";
import TodoList from "./Components/todoApp/TodoList";

function todoReducer(todos, action) {
  switch(action.type) {
    case 'INSERT': //Insert New
      return todos.concat(action.todo)
    case 'REMOVE':
      return todos.filter(todo => todo.id !== action.id)
    case 'TOGGLE':
      return todos.map(todo => todo.id === action.id ? {...todo, checked: !todo.checked}: todo)
    default:
      return todos
  }
}

function createBulkTodos() {
  const array = []
  for(let i = 1; i <= 2500; i++) {
    array.push({
      id: i,
      text: `할 일 ${i}`,
      checked: false
    })
  }

  return array
}

const App = () => {
  const [todos, dispatch] = useReducer(todoReducer, undefined, createBulkTodos)
  //const [todos, setTodos] = useState(createBulkTodos)

  const nextId = useRef(2501)

  const onInsert = useCallback(
    text => {
      const todo = {
        id: nextId.current,
        text,
        checked: false,
      };
      //setTodos(todos => todos.concat(todo))
      dispatch({type: 'INSERT', todo})
      nextId.current += 1;
    },
    []
  )

  const onRemove = useCallback(id => {
    //setTodos(todos => todos.filter(todo => todo.id !== id));
    dispatch({type: 'REMOVE', id})
  }, [])

  const onToggle = useCallback(id => {
    //setTodos(todos => todos.map(todo => todo.id === id ? {...todo, checked: !todo.checked} : todo))
    dispatch({type: 'TOGGLE', id})
  }, [])

  return (
    <TodoTemplate>
      <TodoInsert onInsert={onInsert} />
      <TodoList todos={todos} onRemove={onRemove} onToggle={onToggle} />
    </TodoTemplate>
  )
}
*/

//Router Examples
//import { createBrowserRouter, Route } from "react-router-dom";


const App = () => {
  return (
    <div>
    </div>
  )
}

export default App;
