function iniciar(){
    /*
    COMANDOS SELETORES
    document.querySelector => Seleciona 1 usando CSS selector
    document.querySelectorAll => Seleciona vários
    document.getElementById => Seleciona 1 pelo ID
    document.getElementsByClassName => Seleciona vários por 1 classe
    document.getElementsByTagName => Seleciona vários pelo tipo da tag
  */

  /*
    COMANDOS DE EDIÇÃO DE ELEMENTOS
    elemento.setAttribute("attr",valor) == muda valor do attributo
    elemento.propriedade = valor;   == muda valor da propriedade

    elemento.style["estilo"] = valor; == muda estilo

    elemento.style["background"] = "red";
    
  */


  /*
    COMANDOS DE FILHOS
    pai.appendChild(filho) == adiciona um filho ao pai
    pai.removeChild(filho) == remove um filho do pai
    pai.children == lista de filhos
    filho.parentNode == pai

    Assim, para remover um elemento...
    filho.parentNode.removeChild(filho)

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

  //atual.split
  //atual.match
  //atual[0]
  //atual.length

  //Date.parse(string) ==> tenta parsear a data

  // Setar Attribute só funciona com valor default
  //campo.setAttribute("value","2017-03-27");
  if(Date.parse(atual)){
    // Criar um LI usando document.createElement
    // LI textContent = atual
    // Achar a LISTA
    // Adicionar na LISTA usando lista.appendChild
  }else{
    campo.value = "2017-03-27";
  }

  console.log(atual);
}



//WINDOW => Aba do Browser
window.addEventListener("load", iniciar);
