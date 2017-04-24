var xhr = new XMLHttpRequest();

let iniciar = (e) => {
  // Requisicao por XHR
  xhr.open("get", "dados.json");
  xhr.addEventListener("load",imprimir);
  xhr.send();
}

let imprimir = () => {
  let obj = JSON.parse(xhr.response);
  console.log(obj.idade);
}

window.addEventListener("load", iniciar);
