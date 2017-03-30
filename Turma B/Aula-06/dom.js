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
  btn.addEventListener("click",adicionar);
}

function adicionar(){

}

function validar(texto){
  var valido = false;
  //[TODO] => Validar se o texto é uma data;
  // EXPRESSAO REGULAR texto.match(/\d\d\d\d-\d\d-\d\d/)
  // INSTANCIAR DATA Date.parse(texto);
  // texto[0]
  // texto.split("CARACTER DE SEPARACAO")
  return valido;
}

window.addEventListener("load",main);
/*
function ativar(){
  var paragrafo = document.querySelector("p.ativo");
  var campo = document.querySelector("input[name=texto]");
  var texto = campo.value;
  paragrafo.innerHTML += "<br/>"+texto;
}
*/
