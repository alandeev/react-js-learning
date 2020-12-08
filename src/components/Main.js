import React from 'react';
// import { } from 'react-icons'
import './Main.css';

import Header from './Header';
import Section from './Section';

class Main extends React.Component{
  constructor(props){
    super(props);

    this.state = {
      text: "",
      tasks: [],
      task_edit: null
    }

    this.handleChangeInput = this.handleChangeInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleEditTask = this.handleEditTask.bind(this);
    this.handleDeleteTask = this.handleDeleteTask.bind(this);
  }

  componentDidMount(){
    let tasks = JSON.parse(localStorage.getItem('tasks'));
    if(!tasks) return;

    return this.setState({ tasks })
  }

  componentDidUpdate(prevProps, prevStates){
    const { tasks } = this.state;

    if(tasks === prevStates.tasks) return;

    localStorage.setItem('tasks', JSON.stringify(tasks));
  }

  handleSubmit(event){
    event.preventDefault()

    const { text, tasks, task_edit } = this.state;

    if(!text.trim()){
      return;
    }

    if(tasks.find(element => element === text)){
      return;
    }

    const _tasks = task_edit ? [...tasks.map(task => task === task_edit ? text : task)] : [...tasks, text];

    this.setState({
      tasks: _tasks,
      text: "",
      task_edit: null
    });
  }

  handleChangeInput({ target }){
    this.setState({
      text: target.value
    });
  }

  handleDeleteTask(task){
    const { tasks } = this.state;
    const new_tasks = tasks.filter(element => element !== task);

    this.setState({
      tasks: new_tasks
    })
  }

  handleEditTask(task){
    this.setState({
      text: task,
      task_edit: task
    })
  }

  render(){
    const { tasks, text } = this.state;

    return (
      <div className="main">
        <Header handleSubmit={this.handleSubmit} handleChangeInput={this.handleChangeInput} text={text} />
        <Section tasks={tasks} handleEditTask={this.handleEditTask} handleDeleteTask={this.handleDeleteTask} />
      </div>
    )
  }
}

export default Main;
