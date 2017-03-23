function iniciar(){
  var tinta = document.querySelector("#tinta");
  tinta.addEventListener("change", mudarCor);
}

function mudarCor(){
  var tinta = document.querySelector("#tinta");
  var teste = document.querySelector("#testeCor");
  var cor = tinta.value;
  teste.style.backgroundColor = cor;
}

window.addEventListener("load",iniciar);
