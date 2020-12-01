import React from 'react';

import { FaPlus } from 'react-icons/fa';

import './style.css';

class Header extends React.Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);

    this.state = {
      inputNewTask: '',
    };
  }

  handleChange = (event) => {
    this.setState({
      inputNewTask: event.target.value,
    });
  }

  render() {
    return (
      <header className="header item">
        <h1>Lista de tarefas</h1>
        <form action="#" className="form">
          <input type="text" placeholder="Digite a tarefa..." onChange={this.handleChange} />
          <button type="submit">
            <FaPlus />
          </button>
        </form>
      </header>
    );
  }
}

export default Header;
