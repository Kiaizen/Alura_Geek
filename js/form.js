import { conectaJson } from "./json.js";

const botaoSubmit = document.getElementById("submit");
const botaoLimpar = document.getElementById("limpar");

botaoSubmit.addEventListener("click", async function guardar(e) {
  e.preventDefault();
  const nome = document.getElementById('nome').value;
  const valor = document.getElementById('valor').value;
  const imagem = document.getElementById('imagem').value; 
  if(nome.trim() == '' || valor.trim() == '' || imagem.trim() == ''){
    alert('Preencha todos os campos')
  }else{
    try{
      await conectaJson.post(nome,valor,imagem);
    }catch(err){
      console.error(err)
    }
  }
});

botaoLimpar.addEventListener("click", (e) => {
  e.preventDefault();
  const inputs = document.querySelectorAll('.form__input');
  inputs.forEach((input) => (input.value = ""));
});
