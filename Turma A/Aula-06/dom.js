function iniciar(){
  //Ver se o botão foi clicado
  /*
    document.querySelector => Seleciona 1 usando CSS selector
    document.querySelectorAll => Seleciona vários
    document.getElementById => Seleciona 1 pelo ID
    document.getElementsByClassName => Seleciona vários por 1 classe
    document.getElementsByTagName => Seleciona vários pelo tipo da tag
  */

  //var btn = document.getElementsByTagName("button")[0];
  //var btn = document.querySelectorAll("button")[0];

  var btn = document.querySelector("button");
  btn.addEventListener("click", validar);

}

function validar(){
  //Imprimir o valor do campo
  var campo = document.querySelector("input");
  // ATTRIBUTE != PROPERTY
  var valor = campo.getAttribute("value");
  var atual = campo.value;
  console.log(atual);
}



//WINDOW => Aba do Browser
window.addEventListener("load", iniciar);
