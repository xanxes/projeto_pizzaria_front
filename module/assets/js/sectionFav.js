'use strict'

import './card_favoritos.js'

const fetchPizza = async function () {
    const url = ``
    const response =  await fetch(url);
    const data = await response.json();
    return data
}

const pizza = await fetchPizza();
console.log(pizza);

pizza.forEach(element => {
    const container = document.querySelector('.favoritos')
    const card = document.createElement('.card-favoritos')

    card.setAttribute('imagem', element.imagem)
    card.setAttribute('nome', element.nome)
    card.setAttribute('descricao', element.descricao)
    card.setAttribute('preco', element.preco)
    
    container.appendChild(card)
});

const fetchPizzaDoce = async function () {
    const url = ``;
    const response = await fetch(url);
    const data = await response.json();
    return data
}

const pizzaDoce = await fetchPizzaDoce();
console.log(pizzaDoce);

pizzaDoce.forEach(element => {
    const container = document.querySelector('.favoritos');
    const card = document.createElement('.card-favoritos');

    card.setAttribute('imagem', element.imagem)
    card.setAttribute('nome', element.nome)
    card.setAttribute('descricao', element.descricao)
    card.setAttribute('preco', element.preco)

    container.appendChild(card);
});

const fetchPizzaOrganica = async function () {
    const url = ``;
    const response = await fetch(url);
    const data = await response.json();
    return data
}

const pizzaOrganica = await fetchPizzaOrganica();
console.log(pizzaOrganica);

pizzaOrganica.forEach(element => {
    const container = document.querySelector('.favoritos');
    const card = document.createElement('.card-favoritos');

    card.setAttribute('imagem', element.imagem)
    card.setAttribute('nome', element.nome)
    card.setAttribute('descricao', element.descricao)
    card.setAttribute('preco', element.preco)

    container.appendChild(card);
});

const fetchBebida = async function () {
    const url = ``
    const response =  await fetch(url);
    const data = await response.json();
    return data
}

const bebida = await fetchBebida();
console.log(bebida);

bebida.forEach(element => {
    const container = document.querySelector('.favoritos')
    const card = document.createElement('.card-favoritos')

    card.setAttribute('imagem', element.imagem)
    card.setAttribute('nome', element.nome)
    card.setAttribute('descricao', element.descricao)
    card.setAttribute('preco', element.preco)
    
    container.appendChild(card)
});