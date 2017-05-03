function main(){
  let xhr = new XMLHttpRequest();
  xhr.open("get","data.json");
  xhr.addEventListener("load",imprimir);
  xhr.send();
}

function imprimir(evt){
  console.log(evt);
}

window.addEventListener("load",main);
