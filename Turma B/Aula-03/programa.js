function ligar(){
  var b = document.querySelector("body");
  /*if(b.classList.contains("ligado")){
    b.classList.remove("ligado")
  } else {
    b.classList.add("ligado");
  }*/
  b.classList.toggle("ligado");
}

window.addEventListener("click",ligar);
