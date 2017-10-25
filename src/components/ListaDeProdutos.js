import React from 'react';

export default class ListaDeProdutos extends React.Component {
  comprar(evento) {
    this.props.comprarCallback(evento.target.dataset.idproduto);
  }

  renderProduto(produto, index) {
    return (
      <li key={'produto_' + index}>
        <img src={produto.foto} alt={produto.nome} width="50"/>
        {produto.nome} - R$ {produto.preco}
        <button data-idproduto={produto.id} onClick={this.comprar.bind(this)}>Comprar</button>
      </li>
    );
  }

  render() {
    return (
      <div>
        <h3>Produtos</h3>
        <ul>
          {this.props.produtos
            .filter((produto) => {
              if (this.props.filtro === '') return true;
              return produto.nome.toLowerCase().includes(this.props.filtro.toLowerCase());
            })
            .map(this.renderProduto.bind(this))}
        </ul>
      </div>
    );
  }
}
