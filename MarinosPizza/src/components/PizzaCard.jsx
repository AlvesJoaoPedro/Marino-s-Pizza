import React from "react";
import "../css/cardapio.css";
import cardapioIcon from "../assets/imgs/cardapio-pizza-icon.svg";
import deleteButton from "../assets/imgs/cardapio-remove-symbol.svg"
import addButton from "../assets/imgs/cardapio-add-symbol.svg";

function PizzaCard({ nome, descricao }) {
  return (
    <div className="card-pizza">
      <div className="card-titulo">
        <img
          src={cardapioIcon}
          alt={nome}
          className="card-img"
        />
        <h3>{nome}</h3>
      </div>
      <p>{descricao}</p>
      <div className="card-controles">
        <button disabled>
          <img
            src={deleteButton}
            alt="Remover"
            width="24"
            height="24"
          />
        </button>
        <span className="card-contador">0</span>
        <button>
          <img
            src={addButton}
            alt="Adicionar"
            width="24"
            height="24"
          />
        </button>
      </div>
    </div>
  );
}

export default PizzaCard;
