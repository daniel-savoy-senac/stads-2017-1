let lista = [];
let atual = 0;


let iniciar = (e) => {
  // Requisicao por XHR
  let xhr = new XMLHttpRequest();
  xhr.open("get", "dados.json");
  xhr.addEventListener("load", atualizarLista);
  xhr.send();
  document.querySelector("#proximo").addEventListener("click",irProximo);
  document.querySelector("#anterior").addEventListener("click",irAnterior);
}

let irProximo = () => {
  ++atual;
  if(atual >= lista.length) atual = 0;
  imprimir(lista[atual]);
}

let irAnterior = () => {
  --atual;
  if(atual < 0) atual = lista.length-1;
  imprimir(lista[atual]);
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


/*

  MAP - cria um vetor a partir de outro vetor
  REDUCE - cria um único valor a partir de um vetor
  FOREACH - percorre o vetor
  JOIN - transforma o vetor em uma string (inverso é SPLIT)
  EVERY - se todo o vetor cumpre uma condição
  SOME - se alguém cumpre uma condição
  FILTER - retorna um vetor com apenas os valores que cumpram a condição
  SORT - orderna o vetor de acordo com a função
  REVERSE - retorna o vetor na ordem reversa

*/
