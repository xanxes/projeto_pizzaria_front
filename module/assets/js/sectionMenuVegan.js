
const fetchPizzaOrganica = async function () {
    const url = `https://api-pizzaria.netlify.app/.netlify/functions/api/v1/tipos/pizza/listar/1`;
    const response = await fetch(url);
    const data = await response.json();
    return data
}

const pizzaOrganica = await fetchPizzaOrganica();

pizzaOrganica.forEach(element => {
    const container = document.querySelector('.organicas');
    const card = document.createElement('card-produtos');

    card.setAttribute('nome', element.nome);
    card.setAttribute('descricao', element.descricao);

    container.appendChild(card);
});