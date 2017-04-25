let lista = [];
let atual = 0;


let iniciar = (e) => {
  // Requisicao por XHR
  let xhr = new XMLHttpRequest();
  xhr.open("get", "dados.json");
  xhr.addEventListener("load", atualizarLista);
  xhr.send();
}

let atualizarLista = (evt) => {
  let res = evt.target.response;
  lista = JSON.parse(res);
  atual = 0;
  imprimir(lista[atual]);
}

let imprimir = (obj) => {
  for(let prop in obj){
    let campo = document.querySelector(`#${prop}`);
    campo.value = obj[prop];
  }
}

window.addEventListener("load", iniciar);
