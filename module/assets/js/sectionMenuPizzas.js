import "./card_menu_pizzas.js"

const fetchPizza = async function () {
    const url = `https://api-pizzaria.netlify.app/.netlify/functions/api/v1/tipos/pizza/listar/3`;
    const response = await fetch(url);
    const data = await response.json();
    return data
}

const pizzas = await fetchPizza();

pizzas.forEach(element => {
    const container = document.querySelector('.column1-pizzas');
    const card = document.createElement('card-produtos-pizzas');

    card.setAttribute('nome', element.nome);
    card.setAttribute('descricao', element.descricao);
    
    container.appendChild(card);
});
