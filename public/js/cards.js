import { conectaJson } from "./json.js";
import { htmls } from "./components.js";

const listaDiv = document.querySelector('.produto__lista__div')

function constroiCard(itens){
    let ulAtual = criarNovaUl();
    itens.forEach((item) => {
        if(ulAtual.childElementCount >= 3){
            ulAtual = criarNovaUl();
        }
        const card = document.createElement('li');
        card.className = 'produto__lista';
        card.innerHTML = htmls.htmlCard(item);
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
                ul.innerHTML = htmls.htmlUl()
            
            }
    } catch (error) {
        console.error(error)
        listaDiv.innerHTML = htmls.htmlDiv()
    }
}

listaCards()

function criarNovaUl(){
  const ul = document.createElement('ul');
  ul.className = 'produto__lista__ul'
  listaDiv.appendChild(ul)
  return ul
}

