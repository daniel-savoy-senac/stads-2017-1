function iniciar(){
  var tinta = document.querySelector("#tinta");
  tinta.addEventListener("change", mudarCor);
}

function mudarCor(){
  var tinta = document.querySelector("#tinta");
  var cor = tinta.value;
  console.log(cor);
}

window.addEventListener("load",iniciar);
