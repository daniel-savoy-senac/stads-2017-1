let iniciar = (e) => {
  // Requisicao por XHR
  let xhr = new XMLHttpRequest();
  xhr.open("get", "dados.json");
  xhr.addEventListener("load",imprimir);
  xhr.send();
}

let imprimir = (e) => {
  console.log(e);
}

window.addEventListener("load", iniciar);
