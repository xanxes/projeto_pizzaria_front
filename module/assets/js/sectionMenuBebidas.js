'use strict'

import './card_menu_bebidas.js'

const fetchBebida = async function () {
    const url = `https://api-pizzaria.netlify.app/.netlify/functions/api/v1/bebidas`
    const response =  await fetch(url);
    const data = await response.json();
    return data
}

const { bebidas } = await fetchBebida();

bebidas.forEach(element => {
    const container = document.querySelector('.column1-bebidas');
    const card = document.createElement('card-produtos-bebidas');

    card.setAttribute('nome', element.nome);
    card.setAttribute('descricao', element.descricao);
    
    container.appendChild(card)
});
bebidas.forEach(element => {
    const container = document.querySelector('.column2-bebidas');
    const card = document.createElement('card-produtos-bebidas');

    card.setAttribute('nome', element.nome);
    card.setAttribute('descricao', element.descricao);
    
    container.appendChild(card)
});