var xhr = new XMLHttpRequest();

let iniciar = (e) => {
  // Requisicao por XHR
  xhr.open("get", "dados.json");
  xhr.addEventListener("load",imprimir);
  xhr.send();
}

let imprimir = () => {
  let obj = JSON.parse(xhr.response);
  for(let prop in obj){
    let campo = document.querySelector(`#${prop}`);
    campo.value = obj[prop];
  }
}

window.addEventListener("load", iniciar);
