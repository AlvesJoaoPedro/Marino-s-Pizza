// Lista que armazena as pizzas adicionadas ao carrinho
export const carrinho = [];

// Adiciona a pizza ao carrinho (se ainda não estiver lá)
export function adicionarAoCarrinho(pizza) {
  const itemExistente = carrinho.find(p => p.nome === pizza.nome);
  if (!itemExistente) {
    carrinho.push(pizza);
  }
}

// Remove a pizza do carrinho se a quantidade for 0
export function removerDoCarrinho(pizza) {
  const index = carrinho.findIndex(p => p.nome === pizza.nome);
  if (index !== -1 && pizza.quantidade === 0) {
    carrinho.splice(index, 1);
  }
}

// Retorna uma lista com o nome, quantidade e subtotal de cada pizza no carrinho
export function listarItensFormatados() {
  return carrinho.map(pizza => ({
    nome: pizza.nome,
    quantidade: pizza.quantidade,
    subtotal: pizza.quantidade * pizza.preco
  }));
}

// Retorna apenas as pizzas com quantidade maior que 0
export function pizzasAtivas() {
  return carrinho.filter(pizza => pizza.quantidade > 0);
}

// Calcula o valor total do carrinho (quantidade * preço de cada pizza)
export function calcularTotal() {
  return carrinho.reduce((total, pizza) => {
    return total + (pizza.quantidade * pizza.preco);
  }, 0);
}
