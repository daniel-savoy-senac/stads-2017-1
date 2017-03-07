function abrirPopup(){
  var popup = document.querySelector(".popup");
  popup.classList.toggle("aberta");
}

window.addEventListener("click",abrirPopup);
