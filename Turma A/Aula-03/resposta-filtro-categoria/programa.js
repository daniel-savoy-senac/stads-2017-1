function filtro(c){
  var body = document.body;
  body.classList.toggle(c);
}

document.querySelector("#romance-btn")
.addEventListener("click",function(){filtro('romance')});
