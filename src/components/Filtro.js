import React from 'react';

export default class Filtro extends React.Component {
  setFiltro() {
    this.props.atualizaFiltro(this.filtro.value);
  }

  render() {
    return (
      <div>
        <input ref={(input) => this.filtro = input}/>
        <button onClick={this.setFiltro.bind(this)}>Filtrar</button>
      </div>
    );
  }
}
