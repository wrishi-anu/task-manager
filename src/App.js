import React from 'react';
import './App.css';
import AddTask from './components/AddTask';
import DoneList from './components/DoneList';
import ToDoList from './components/TodoList';

class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      todoList: [],
      doneList: []
    }

    this.updateTodoList = this.updateTodoList.bind(this)
    this.updateTodo_Done = this.updateTodo_Done.bind(this)
    this.updateDone_Todo = this.updateDone_Todo.bind(this)
  }

  updateTodoList(task) {
    let list = [...this.state.todoList]
    list.push(task)
    this.setState({
      todoList: list
    })
  }

  updateStore() {

  }

  updateTodo_Done(index) {
    let task = { ...this.state.todoList[index] }
    let todoList = [...this.state.todoList]
    todoList.splice(index, 1)
    let doneList = [...this.state.doneList]
    doneList.push(task)

    this.setState({
      todoList: todoList,
      doneList: doneList
    })

    
  }

  updateDone_Todo(index) {
    let task = { ...this.state.doneList[index] }
    let doneList = [...this.state.doneList]
    doneList.splice(index, 1)
    let todoList = [...this.state.todoList]
    todoList.push(task)

    this.setState({
      todoList: todoList,
      doneList: doneList
    })
  }

  render() {
    return (
      <div className="App">
        <AddTask updateTodoList={this.updateTodoList}></AddTask>
        <ToDoList tdlist={this.state.todoList} updateTask={this.updateTodo_Done}></ToDoList>
        <DoneList dlist={this.state.doneList} updateTask={this.updateDone_Todo}></DoneList>
      </div>
    );
  }
}

export default App;
