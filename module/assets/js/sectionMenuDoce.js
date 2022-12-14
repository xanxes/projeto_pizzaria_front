import "./card_menu_doce.js"

const fetchPizzaDoce = async function () {
    const url = `https://api-pizzaria.netlify.app/.netlify/functions/api/v1/tipos/pizza/listar/4`;
    const response = await fetch(url);
    const data = await response.json();
    return data
}
const pizzaDoce = await fetchPizzaDoce();

pizzaDoce.forEach(element => {
    const container = document.querySelector('.doces');
    const card = document.createElement('card-produtos');

    card.setAttribute('nome', element.nome);
    card.setAttribute('descricao', element.descricao);

    container.appendChild(card);
});