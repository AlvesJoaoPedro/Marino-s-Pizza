import { adicionarAoCarrinho, removerDoCarrinho } from "./carrinho.js";

class Pizza {
  constructor(nome, descricao, preco = 64) {
    this.nome = nome;
    this.descricao = descricao;
    this.preco = preco;
    this.quantidade = 0;
  }

  adicionar() {
    this.quantidade++;
  }

  remover() {
    if (this.quantidade > 0) {
      this.quantidade--;
    }
  }
}

const pizzas = [
  new Pizza("Calabresa", "Uma explosão de sabor! Coberta com generosas fatias de calabresa levemente apimentada, cebola roxa fatiada, azeitonas pretas e orégano especial sobre uma camada de queijo mussarela derretido."),
  new Pizza("Frango c/ Catupiry", "Clássico e irresistível. Frango desfiado temperado com ervas e especiarias, combinado com o tradicional requeijão Catupiry e finalizado com orégano e um toque de parmesão."),
  new Pizza("Mussarela", "Simples, mas perfeita. Uma generosa camada de queijo mussarela 100% puro, derretido até o ponto ideal, polvilhado com orégano fresco e servido sobre nosso molho artesanal de tomate."),
  new Pizza("Marguerita", "Elegância e leveza. Molho de tomate fresco, fatias de tomate, mussarela e manjericão recém-colhido. Finalizada com um fio de azeite de oliva extravirgem."),
  new Pizza("Portuguesa", "Uma combinação que conquista! Presunto, ovos cozidos, cebola, ervilha, azeitonas, pimentão e queijo mussarela sobre um molho levemente temperado. Tradição em cada pedaço."),
  new Pizza("Quatro Queijos", "Para os amantes do queijo! Uma mistura cremosa de mussarela, parmesão, gorgonzola e catupiry sobre uma base de molho branco suave. Cremosa, intensa e inesquecível."),
  new Pizza("Pepperoni", "Clássico americano com toque brasileiro. Fatias crocantes de pepperoni sobre queijo mussarela derretido, finalizadas com orégano e um toque de páprica."),
  new Pizza("Vegetariana", "Refrescante e saborosa. Abobrinha, berinjela, pimentão, tomate, cebola roxa, champignon e azeitonas, tudo sobre queijo mussarela e molho artesanal."),
  new Pizza("Napolitana", "Um clássico italiano com muito sabor! Preparada com molho de tomate fresco, queijo mussarela, rodelas de tomate, azeitonas pretas e um toque especial de orégano e manjericão. Simples, leve e deliciosa!"),
  new Pizza("Bacon c/ Cheddar", "Sabor marcante em cada mordida! Tiras de bacon crocante, mussarela e uma generosa camada de creme de cheddar. Ideal para quem curte sabores intensos.")
];

const main = document.querySelector("main");
const cardapioContainer = document.createElement("section");
cardapioContainer.classList.add("container", "cardapio");
main.appendChild(cardapioContainer);

pizzas.forEach(pizza => {
  const card = document.createElement("div");
  card.classList.add("card-pizza");

  // Imagem + Nome (horizontal)
  const titulo = document.createElement("div");
  titulo.style.display = "flex";
  titulo.style.alignItems = "center";
  titulo.style.justifyContent = "center";
  titulo.style.gap = "0.5rem";

  const img = document.createElement("img");
  img.src = "imgs/cardapio-icons/cardapio-pizza-icon.svg";
  img.alt = pizza.nome;
  img.style.width = "40px";
  img.style.height = "40px";
  img.style.objectFit = "cover";
  img.style.borderRadius = "5px";

  const nome = document.createElement("h3");
  nome.textContent = pizza.nome;

  titulo.appendChild(img);
  titulo.appendChild(nome);

  // Descrição
  const descricao = document.createElement("p");
  descricao.textContent = pizza.descricao;

  // Seção dos botões
  const controles = document.createElement("div");
  controles.style.display = "flex";
  controles.style.justifyContent = "center";
  controles.style.alignItems = "center";
  controles.style.gap = "0.5rem";
  controles.style.marginTop = "1rem";

  const btnRemove = document.createElement("button");
  btnRemove.innerHTML = `<img src="imgs/cardapio-icons/cardapio-remove-symbol.svg" alt="Remover" width="24" height="24">`;
  btnRemove.disabled = true;

  const contador = document.createElement("span");
  contador.textContent = pizza.quantidade;
  contador.style.minWidth = "20px";
  contador.style.textAlign = "center";

  const btnAdd = document.createElement("button");
  btnAdd.innerHTML = `<img src="imgs/cardapio-icons/cardapio-add-symbol.svg" alt="Adicionar" width="24" height="24">`;

  // Eventos
  btnAdd.addEventListener("click", () => {
    pizza.adicionar();
    contador.textContent = pizza.quantidade;
    if (pizza.quantidade > 0) btnRemove.disabled = false;

    adicionarAoCarrinho(pizza);
  });

  btnRemove.addEventListener("click", () => {
    pizza.remover();
    contador.textContent = pizza.quantidade;
    if (pizza.quantidade === 0) btnRemove.disabled = true;

    removerDoCarrinho(pizza);
  });

  controles.appendChild(btnRemove);
  controles.appendChild(contador);
  controles.appendChild(btnAdd);

  // Monta o card
  card.appendChild(titulo);
  card.appendChild(descricao);
  card.appendChild(controles);
  cardapioContainer.appendChild(card);
});
