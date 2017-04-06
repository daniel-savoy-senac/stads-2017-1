/*
Qual o conteúdo necessário no arquivo "programa.js" para (A) criar um novo elemento <p>, (B) dentro do "div" de listagem, (C) com o texto "[Sobrenome], [Nome]" com o valor dos campos correspondentes no formulário, (D) toda a vez que o botão "Adicionar" for clicado. (E) O formulário deve ser limpo após a criação de cada novo elemento de parágrafo.
*/

function iniciar(){
  var btn = document.querySelector(".btns>button:nth-of-type(2)");
  btn.addEventListener("click",adicionar);
}

function adicionar(){
  var p = document.createElement("p");
  var listagem = document.querySelector("div.listagem");
  var nome = document.querySelector("#nome");
  var sobrenome = document.querySelector("#sobrenome");
  p.textContent = sobrenome.value +", "+ nome.value;
  listagem.appendChild(p);
  limpar();
}

function limpar(){
  var campos = document.querySelectorAll("form input");
  for(var i =0; i < campos.length; i++){
    campos[i].value = "";
  }
}

window.addEventListener("load", iniciar);
