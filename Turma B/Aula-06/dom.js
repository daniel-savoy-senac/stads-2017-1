/* COMMANDOS DE BUSCA NO DOM*/
  // document.querySelector("SELETOR CSS");
  // document.querySelectorAll("SELETOR CSS");

  // document.children[0].children[1].children[1];
  // document.getElementsByTagName("COMANDO HTML");
  // document.getElementsByClassName("CLASSE");
  // document.getElementById("ID");
  // document.getElementsByName("NOME DO CAMPO");
  // $x("X-PATH");


/* COMANDOS COM ELEMENTOS */
  // elemento.parentNode ==> Acessa o pai do elemento
  // document.createElement("COMANDO HTML");
  // pai.appendChild(filho);
  // elemento.remove(); //CUIDADO NO IE;
  // elemento.parentNode.removeChild(elmento);

/* COMANDO DE MODIFICAÇÃO */
  // elemtno.setAttribute("ATTR","VALOR");
  // elemento.PROPRIEDADE = VALOR;
  // elemento.style["ESTILO CSS"] = VALOR;

function main(){
  var btn = document.querySelector("button#btn");
  btn.addEventListener("click",ativar);
}

function ativar(){
  var paragrafo = document.querySelector("p.ativo");
  var campo = document.querySelector("input[name=texto]");
  var texto = campo.value;
  paragrafo.innerHTML += "<br/>"+texto;
}

window.addEventListener("load",main);
