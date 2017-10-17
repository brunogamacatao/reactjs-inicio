import React from 'react';

import MeuPrimeiroComponente from './MeuPrimeiroComponente';
import ComponenteComCallback from './ComponenteComCallback';
import ListaDeCoisas from './ListaDeCoisas';

export default class Main extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      coisas: []
    };
  }

  adicionar(coisa) {
    var coisas = this.state.coisas.slice(); // clonando o array orinigal
    coisas.push(coisa);
    this.setState({coisas: coisas});
  }

  render() {
    return (
      <div className="row">
        <div className="col-md-4">
          <MeuPrimeiroComponente titulo="Bem Vindos ao ReactJS"/>
        </div>
        <div className="col-md-4">
          <ComponenteComCallback adicionar={this.adicionar.bind(this)}/>
        </div>
        <div className="col-md-4">
          <ListaDeCoisas coisas={this.state.coisas}/>
        </div>
      </div>
    );
  }
}
