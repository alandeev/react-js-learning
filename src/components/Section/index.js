import React from 'react';

import './style.css';

class Section extends React.Component {
  constructor(props) {
    super(props);

    this.handleChangeTaskState = this.handleChangeTaskState.bind(this);

    this.state = {
      listTask: [
        {
          name: 'React-JS Inicio',
          state: 'Ready',
        },
        {
          name: 'Componentes no React',
          state: 'Waiting',
        },
        {
          name: 'Estados no React',
          state: 'Waiting',
        },
        {
          name: 'Estilizando Página',
          state: 'Waiting',
        },
        {
          name: 'Criando simples APP de Task',
          state: 'Waiting',
        },
        {
          name: 'Enviar para o Linkedin/GitHub',
          state: 'Waiting',
        },
      ],
    };
  }

  handleChangeTaskState(event, id) {
    const { listTask } = this.state;

    const newList = listTask.map((element, index) => {
      if (index === id) element.state = 'Ready';

      return element;
    });

    this.setState({
      listTask: newList,
    });
  }

  render() {
    const { listTask } = this.state;

    return (
      <section className="section item">
        <ul className="tasks">
          {listTask.map((task, id) => (
            <li className="task" key={id} onClick={(event) => this.handleChangeTaskState(event, id)}>
              <p className="title">{task.name}</p>
              <p className="state">{task.state}</p>
            </li>
          ))}
        </ul>
      </section>
    );
  }
}

export default Section;
