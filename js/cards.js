import { conectaJson } from "./json.js";

const listaDiv = document.querySelector('.produto__lista__div')

function constroiCard(itens){
    let ulAtual = criarNovaUl();
    itens.forEach((item) => {
        if(ulAtual.childElementCount >= 3){
            ulAtual = criarNovaUl();
        }
        const card = document.createElement('li');
        card.className = 'produto__lista';
        card.innerHTML = `
              <img
                src="${item.imagem}" alt=""
              />
              <h3>${item.nome}</h3>
              <div class="produto__preco">
                <p>$ ${item.valor}</p>
                <button class="lixeira" data-id="${item.id}"id="lixeira">
                <img src="./assets/🦆 icon _trash 2_.png" alt="Lixeira">
                </button>
              </div>
            `
        ulAtual.appendChild(card);
    })
}

async function listaCards(){
    try {
        const listaApi = await conectaJson.get();
        constroiCard(listaApi)
            const botaoLixeira = document.querySelectorAll('.lixeira')
            botaoLixeira.forEach((botao)=>{
                botao.addEventListener('click',function (){
                    const cardId = this.getAttribute('data-id')
                    conectaJson.deletar(cardId)
                })
            })
            const ul = document.querySelector('.produto__lista__ul')
            if(ul.childElementCount == 0){
                ul.innerHTML = '<h2 class ="title">Nenhum produto foi adicionado</h2>'
            
            }
    } catch (error) {
        console.error(error)
        listaDiv.innerHTML = `<h2 class="title">Não foi possível carregar a lista de produtos</h2>`
    }
}

listaCards()

function criarNovaUl(){
  const ul = document.createElement('ul');
  ul.className = 'produto__lista__ul'
  listaDiv.appendChild(ul)
  return ul
}

