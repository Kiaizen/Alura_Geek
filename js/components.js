function htmlCard(item){
    return `
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
}

function htmlUl(){
    return '<h2 class ="title">Nenhum produto foi adicionado</h2>'
}

function htmlDiv(){
    return `<h2 class="title">Não foi possível carregar a lista de produtos</h2>`
}

export const htmls = {
    htmlCard,
    htmlUl,
    htmlDiv
}