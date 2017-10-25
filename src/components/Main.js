import React from 'react';
import ListaDeProdutos from './ListaDeProdutos';
import Filtro from './Filtro';
import Carrinho from './Carrinho';

export default class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      estoque: [
        {id: 0, nome: 'Caixa de Chocolate', foto: 'https://www.paodeacucar.com/img/uploads/1/238/539238x200x200.jpg?type=product', preco: 9.49},
        {id: 1, nome: 'Batata pra Assar', foto: 'https://www.paodeacucar.com/img/uploads/1/797/531797x200x200.jpg?type=product', preco: 5.09},
        {id: 2, nome: 'Cerveja Erdinger', foto: 'https://www.paodeacucar.com/img/uploads/1/116/525116x200x200.jpg?type=product', preco: 9.62},
        {id: 3, nome: 'Miojo', foto: 'https://www.paodeacucar.com/img/uploads/1/534/531534x200x200.jpg?type=product', preco: 1.35}
      ],
      carrinho: [],
      filtro: ''
    };
  }

  atualizaFiltro(filtro) {
    this.setState({filtro: filtro});
  }

  comprar(idProduto) {
    // Procurar no estoque um produto com o id = idProduto
    var produtos = this.state.estoque.filter((p) => p.id == idProduto);
    if (produtos.length > 0) {
      var produto = produtos[0]; // Encontrei o produto
      var carrinho = this.state.carrinho.slice(); // Clonando o carrinho
      carrinho.push(produto); // Adicionando o produto ao carrinho
      this.setState({carrinho: carrinho}); // Atualizando o estado do carrinho
    }
  }

  excluir(idProduto) {
    var indice = 0;
    var carrinho = this.state.carrinho.slice();
    for (var i = 0; i < carrinho.length; i++) {
      if (carrinho[i].id == idProduto) {
        indice = i;
        break;
      }
    }
    carrinho.splice(indice, 1);
    this.setState({carrinho: carrinho});
  }

  render() {
    return (
      <div className="content">
        <div className="row">
        <div className="col-md-12">
          <Filtro atualizaFiltro={this.atualizaFiltro.bind(this)}/>
        </div>
        </div>
        <div className="row">
          <div className="col-md-8">
            <ListaDeProdutos 
              comprarCallback={this.comprar.bind(this)}
              produtos={this.state.estoque} 
              filtro={this.state.filtro}/>
          </div>
          <div className="col-md-4">
            <Carrinho 
              excluirCallback={this.excluir.bind(this)} 
              carrinho={this.state.carrinho}/>
          </div>
        </div>
      </div>
    );
  }
}
