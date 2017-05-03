function main(){
  let xhr = new XMLHttpRequest();
  xhr.open("get","data.json");
  xhr.addEventListener("load",imprimir);
  xhr.send();
}

function imprimir(evt){
  let obj = JSON.parse(evt.target.responseText);
  console.log(obj);
}

window.addEventListener("load",main);
