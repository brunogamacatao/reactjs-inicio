export function cadastrarProduto(produto) {
  return {
    type: 'CADASTRAR_PRODUTO',
    produto
  };
}

export function excluirProduto(produtoId) {
  return {
    type: 'EXCLUIR_PRODUTO',
    produtoId
  };
}

export function setRedirectUrl(url) {
  return {
    type: 'SET_REDIRECT_URL',
    url
  };
}

export function login(username, password) {
  return {
    type: 'LOGIN',
    username,
    password
  }
}

export function logout() {
  return {
    type: 'LOGOUT'
  }
}