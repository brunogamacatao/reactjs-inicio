import React from 'react';
import PropTypes from 'prop-types';

export default class MeuPrimeiroComponente extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      mensagem: ''
    };
  }

  entrar(event) {
    event.preventDefault();
    this.setState({mensagem: `Usário: ${this.usuario.value} - Senha: ${this.senha.value}`});
    this.form.reset();
  }

  render() {
    return (
      <div>
        <h1>{this.props.titulo}</h1>
        <form ref={(input) => this.form = input} 
              onSubmit={(e) => this.entrar(e)}>
          <div className="form-group">
            <label>Usuário:</label>
            <input className="form-control" type="text" ref={(input) => this.usuario = input} />
          </div>
          <div className="form-group">
            <label>Senha:</label>
            <input className="form-control" type="password" ref={(input) => this.senha = input} />
          </div>
          <button type="submit" className="btn btn-default">Entrar</button>
        </form>
        <h4>{this.state.mensagem}</h4>
      </div>
    );
  }
}

MeuPrimeiroComponente.propTypes = {
  titulo: PropTypes.string.isRequired
};