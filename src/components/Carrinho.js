import React from 'react';

export default class Carrinho extends React.Component {
  excluir(evento) {
    this.props.excluirCallback(evento.target.dataset.idproduto);
  }

  renderProduto(produto, index) {
    return (
      <li key={'produto_' + index}>
        <button data-idproduto={produto.id} onClick={this.excluir.bind(this)}>X</button>
        <img src={produto.foto} alt={produto.nome} width="30"/>
        {produto.nome} - R$ {produto.preco}
      </li>
    );
  }

  render() {
    var total = 0;
    this.props.carrinho.forEach((p) => total += p.preco);

    return (
      <div>
        <h3>Carrinho</h3>
        <ul>
          {this.props.carrinho
            .map(this.renderProduto.bind(this))}
        </ul>
        <hr/>
        <h3>Total: R$ {total}</h3>
      </div>
    );
  }
}
