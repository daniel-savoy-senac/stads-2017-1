/* COMMANDOS DE BUSCA NO DOM*/
  //document.querySelector("SELETOR CSS");
  //document.querySelectorAll("SELETOR CSS");

  //document.children[0].children[1].children[1];
  //document.getElementsByTagName("COMANDO HTML");
  //document.getElementsByClassName("CLASSE");
  //document.getElementById("ID");
  //document.getElementsByName("NOME DO CAMPO");
  //$x("X-PATH");

function main(){
  var btn = document.querySelector("button#btn");
  btn.addEventListener("click",ativar);
}

function ativar(){
  console.log("ATIVADO!!!");
}

window.addEventListener("load",main);
