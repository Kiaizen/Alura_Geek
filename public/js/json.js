async function get(){
    let response = await fetch('http://localhost:3000/posts')
    let data = await response.json()
    return data
}

async function post(nome,valor,imagem){
   const conexao = await fetch('http://localhost:3000/posts', {
    method: 'POST',
    headers: {
       'Content-Type': 'application/json',
    },
    body: JSON.stringify({
       nome: nome,
       valor: valor,
       imagem: imagem
    })
})
    if(!conexao.ok){
        throw new Error('Não foi possível guardar o produto')
    }
    const conexaoConvertida = conexao.json()
    return conexaoConvertida
}

async function deletar(removeData){
    const conexao = await fetch(`http://localHost:3000/posts/${removeData}`, {
        method: 'DELETE',
        })
        const conexaoConvertida = conexao.json()
        return conexaoConvertida
}


export const conectaJson = {
    get,
    post,
    deletar
}