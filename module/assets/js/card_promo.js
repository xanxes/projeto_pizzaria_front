class CardPromo extends HTMLElement{
    constructor(){
        super();
        this.shadow = this.attachShadow({mode:'open'});
        this.bgcolor = '#E7A200'
        this.imagem = ''
        this.nome = 'Nome do Produto'
        this.descricao = ''
        this.preco_final = ''
    }
    static get observedAttributes(){
        return ['bgcolor', 'imagem', 'nome','descricao', 'preco_final']
    }

    attributeChangedCallback(nameAttr, oldValue, newValue){
        //this.[nameAttr] = newValue

        if (nameAttr === 'bgcolor') {
            this.bgcolor = newValue
        } else if (nameAttr === 'imagem') {
            this.imagem = newValue
        } else if (nameAttr === 'nome') {
            this.nome = newValue
        } else if (nameAttr === 'descricao') {
            this.descricao = newValue
        } else if (nameAttr === 'preco_final') {
            this.preco_final = newValue
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
            .card_promo{
                display: flex;
                justify-content: space-between;
                flex-direction: column;
                background-color: #E7A200;
                height: 420px;
                width: 360px;
                border-radius: 20px;
                padding: 25px;
            }
            .card_promo:hover .number_card{
                color: #d03012;
                transition: 0.5s;
            }
            .card_promo img{
                height: 220px;
                border-radius: 12px;
            }
            .txt_card{
                color: white;
                font-family: 'Roboto', sans-serif;
                font-size: 20px;
                gap: 5px;
            }
            .txt_card h1 {
                margin:0;
            }
            .number_card{
                display: flex;
                justify-content: flex-end;
                color: white;
                font-family: 'Roboto', sans-serif;
                font-size: 38px;
                font-weight: 800;
            }

            @media (max-width:768px) {
                .card_promo {
                    height: 420px;
                    width: 290px;
                    border-radius: 18px;
                    padding: 18px;
                }
                
                .card_promo img {
                    height: fit-content;
                    border-radius: 10px;
                }
                
                .txt_card {
                    gap: 5px;
                    margin-top: 5px;
                }
                
                .txt_card h1{ 
                    font-size: 22px;
                }
            
                span.description{
                    font-size: 16px;
                }
                
                span.price{
                    font-size: 28px;
                }
            }
        `
        return style;
    }

    component(){
        const card = document.createElement('div');
        card.classList.add('card_promo');
        card.innerHTML = 
        `
        <img src="${this.imagem}" alt="">
        <div class="txt_card">
            <h1 class="name">${this.nome}</h1>
            <span class="description">${this.descricao}</span>
        </div>
        <div class="number_card">
            <span class="price">R$${this.preco_final}</span>
        </div>

        `
        return card;
    }
}
customElements.define('card-promo', CardPromo)