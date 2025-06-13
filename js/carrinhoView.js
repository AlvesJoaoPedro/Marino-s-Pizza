import { pizzasAtivas, calcularTotal } from './carrinho.js';

// Agora usamos os nomes que estão no seu HTML
const carrinhoItensDiv = document.getElementById("itens-carrinho");
const carrinhoTotalSpan = document.getElementById("total-carrinho");

function renderizarCarrinho() {
  const pizzas = pizzasAtivas();

  // Limpa o conteúdo anterior
  carrinhoItensDiv.innerHTML = "";

  if (pizzas.length === 0) {
    carrinhoItensDiv.textContent = "Seu carrinho está vazio.";
    carrinhoTotalSpan.textContent = "0,00";
    return;
  }

  // Cria os elementos para cada pizza
  pizzas.forEach(pizza => {
    const item = document.createElement("div");
    item.textContent = `${pizza.nome} x ${pizza.quantidade}`;
    carrinhoItensDiv.appendChild(item);
  });

  // Exibe o total
  const total = calcularTotal();
  carrinhoTotalSpan.textContent = total.toFixed(2);
}
export { renderizarCarrinho };