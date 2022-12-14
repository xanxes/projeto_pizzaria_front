class CardProdutos extends HTMLElement{
    constructor(){
        super();
        this.shadow = this.attachShadow({mode:'open'});
        this.bgcolor = '#EBE7DB'
        this.nome = 'Nome do Produto'
        this.descricao = ''
    }
    static get observedAttributes(){
        return ['bgcolor', 'nome', 'descricao']
    }

    attributeChangedCallback(nameAttr, oldValue, newValue){
        //this.[nameAttr] = newValue

        if (nameAttr === 'bgcolor') {
            this.bgcolor = newValue
        } else if (nameAttr === 'nome') {
            this.nome = newValue
        } else if (nameAttr === 'descricao') {
            this.descricao = newValue
        }
    }

    connectedCallback(){
        this.shadow.appendChild(this.component());
        this.shadow.appendChild(this.styles());
    }

    styles(){
        const style = document.createElement('style');
        style.textContent = 
        `
            .card_produtos_bebidas{
                display: flex;
                align-items: center;
                justify-content: space-around;
                height: 180px;
                width: 700px;
                font-family: 'Roboto', sans-serif;
            }
            .card_produtos_bebidas i{
                font-size: 28px;
            }
            .info{
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
                gap: 6px;
                color: #d03012;
            }
            .info h1{
                font-size: 32px;
                font-weight: 800;
            }
            .info span{
                font-size: 22px;
                font-weight: 400;
            }

            @media (max-width:768px) {
                .card_produtos_bebidas {
                    height: 150px;
                    width: 90%;
                }
            
                .card_produtos_bebidas i {
                    font-size: 20px;
                }
            
                .info {
                    gap: 5px;
                }
            
                .info h1 {
                    font-size: 22px;
                }
            
                .info span {
                    font-size: 16px;
                }
            }
        `
        return style;
    }

    component(){
        const card = document.createElement('div');
        card.classList.add('card_produtos_bebidas');
        card.innerHTML = 
        `
        <div class="card_produtos_bebidas">
            <div class="info">
                <h1 class="nome">${this.nome}</h1>
                <span class="desc">${this.descricao}</span>
            </div>
        </div>
        `
        return card;
    }
}
customElements.define("card-produtos-bebidas", CardProdutos)