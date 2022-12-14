'use strict'

import "./card_promo.js"

const fetchPizzaPromocao = async function () {
    const url = `https://api-pizzaria.netlify.app/.netlify/functions/api/v1/promocao/pizzas`
    const response =  await fetch(url);
    const data = await response.json();
    return data
}

const { pizzas } = await fetchPizzaPromocao();

pizzas.forEach(element => {
    const container = document.querySelector('.promocoes')
    const card = document.createElement('card-promo')

    card.setAttribute('imagem', element.imagem)
    card.setAttribute('nome', element.nome)
    card.setAttribute('descricao', element.descricao)
    card.setAttribute('preco_final', element.preco_final)
    
    container.appendChild(card)
});


