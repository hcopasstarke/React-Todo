import React from 'react';
import Form from './components/TodoComponents/TodoForm';
import List from './components/TodoComponents/TodoList';
import './components/TodoComponents/Todo.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todoList: [
        {
          task: 'Learn setState()',
          id: 1528817077286,
          completed: false
        },
        {
          task: 'Style my Todo List',
          id: 1528817084358,
          completed: false
        },
        {
        task: 'Learn React!',
        id: 1528817084359,
        completed: false
        },
        {
        task: 'Virtual DOM re-write',
        id: 1528817084360,
        completed: false
        },
        {
        task: 'Build Todo App',
        id: 1528817084400,
        completed: false
        },
      ],
      newTodo: ''
    };
  }

  changeHandler = event => {
    console.log(event.target.value);
    this.setState({ newTodo: event.target.value });
  };

  toggleTodo = index => {
    this.setState({
      todoList: this.state.todoList.map((item, idx) => {
        if (index !== idx) {
          return item;
        } else {
          return {
            ...item,
            completed: !item.completed
          };
        }
      })
    });
  };

  addNewTodo = event => {
    event.preventDefault();
    if (!this.state.newTodo) return;
    this.setState({
      todoList: [...this.state.todoList, { task: this.state.newTodo, id: Date.now(), completed: false }], newTodo: ''
    });
  };

  clearCompleted = event => {
    event.preventDefault();
    this.setState({
      todoList: this.state.todoList.filter(task => {
        return task.completed === false;
      })
    });
  };

  render() {
    return (
      <div>
        <List todoData={this.state.todoList} toggleTodo={this.toggleTodo} />
        <Form
          addNewTodo={this.addNewTodo}
          changeHandler={this.changeHandler}
          newTodo={this.state.newTodo}
          toggleTodo={this.toggleTodo}
          clearCompleted={this.clearCompleted}
        />
      </div>
    );
  }
}

export default App;
