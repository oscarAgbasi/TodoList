import React from 'react';
import './App.css';
import Todos from './Components/Todos';


class App extends React.Component {
  state = {
    todos: [
      {
        id : 1,
        title : 'Say your Prayer',
        Completed: false
      },
      {
        id : 2,
        title : 'Take Shower',
        Completed: false
      },
      {
        id : 3, 
        title : 'Dinner with babe',
        Completed: false
      },
    ]

  }
  render() {
    return (
      <div className="App">
        <Todos todos={this.state.todos} />
      </div>
    );
  }
}


export default App;
