import Navbar from "../components/Header";
import Banner from "../components/Hero.jsx";
import Footer from "../components/Footer.jsx";
import React from "react";
import PizzaCard from "./PizzaCard";
import pizzas from "../data/pizzas.js";

function Cardapio() {
  return (
    <div>
        <Navbar />
        <Banner />
        <section className="container cardapio">
          {pizzas.map((pizza, index) => (
            <PizzaCard
              key={index}
              nome={pizza.nome}
              descricao={pizza.descricao}
            />
          ))}
        </section>
        <Footer />
    </div>
  );
}

export default Cardapio;