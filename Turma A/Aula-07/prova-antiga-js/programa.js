function iniciar(){
  var addBtn = document.querySelector("button[type=button]");
  addBtn.addEventListener("click",adicionar);
}

function adicionar(){
  var nome = document.querySelector("#nome").value;
  var sobrenome = document.querySelector("#sobrenome").value;
  var txt = sobrenome +", "+nome;
  var p = document.createElement("p");
  p.textContent = txt;
  var listagem = document.querySelector("div.listagem");
  listagem.appendChild(p);
  limpar();
}

function limpar(){
  var campos = document.querySelectorAll("form input");
  for(var i =0; i < campos.length; i++ ){
    campos[i].value = "";
  }
}

window.addEventListener("load",iniciar);
