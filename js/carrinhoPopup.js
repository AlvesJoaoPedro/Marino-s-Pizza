import { renderizarCarrinho } from './carrinhoView.js';

const botaoCarrinho = document.getElementById('abrir-carrinho');
const popupCarrinho = document.getElementById('popup-carrinho');
const botaoFechar = document.getElementById('fechar-popup');

if (botaoCarrinho && popupCarrinho && botaoFechar) {
  botaoCarrinho.addEventListener('click', (e) => {
    e.preventDefault();
    popupCarrinho.classList.remove('hidden');
    renderizarCarrinho(); // ESSENCIAL!
  });

  botaoFechar.addEventListener('click', () => {
    popupCarrinho.classList.add('hidden');
  });

  popupCarrinho.addEventListener('click', (e) => {
    if (e.target === popupCarrinho) {
      popupCarrinho.classList.add('hidden');
    }
  });
}