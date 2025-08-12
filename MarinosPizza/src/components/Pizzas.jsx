

function Pizzas()
{
    return (
        <section class="container cardapio">
            <div class="card-pizza">
                <div style="display:flex;align-items:center;justify-content:center;gap:0.5rem;">
                <img src="../assets/imgs/" alt="Calabresa" style="width:40px;height:40px;object-fit:cover;border-radius:5px;"/>
                <h3>Calabresa</h3>
                </div>
                <p>Uma explosão de sabor! Coberta com generosas fatias de calabresa levemente apimentada, cebola roxa fatiada, azeitonas pretas e orégano especial sobre uma camada de queijo mussarela derretido.</p>
                <div style="display:flex;justify-content:center;align-items:center;gap:0.5rem;margin-top:1rem;">
                <button disabled><img src="imgs/cardapio-icons/cardapio-remove-symbol.svg" alt="Remover" width="24" height="24"/></button>
                <span style="min-width:20px;text-align:center;">0</span>
                <button><img src="imgs/cardapio-icons/cardapio-add-symbol.svg" alt="Adicionar" width="24" height="24"/></button>
                </div>
            </div>as


            <div class="card-pizza">
                <div style="display:flex;align-items:center;justify-content:center;gap:0.5rem;">
                <img src="../src/imgs/cardapio-icons/cardapio-pizza-icon.svg" alt="Frango c/ Catupiry" style="width:40px;height:40px;object-fit:cover;border-radius:5px;"/>
                <h3>Frango c/ Catupiry</h3>
                </div>
                <p>Clássico e irresistível. Frango desfiado temperado com ervas e especiarias, combinado com o tradicional requeijão Catupiry e finalizado com orégano e um toque de parmesão.</p>
                <div style="display:flex;justify-content:center;align-items:center;gap:0.5rem;margin-top:1rem;">
                <button disabled><img src="imgs/cardapio-icons/cardapio-remove-symbol.svg" alt="Remover" width="24" height="24"/></button>
                <span style="min-width:20px;text-align:center;">0</span>
                <button><img src="imgs/cardapio-icons/cardapio-add-symbol.svg" alt="Adicionar" width="24" height="24"/></button>
                </div>
            </div>
        </section>
    )
}