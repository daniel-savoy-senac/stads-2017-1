var listaService;
var listaUsuarios = [];
var divUsuarios ;

function iniciar(){
   divUsuarios = document.querySelector(".usuarios");
   atualizarLista();
}

function listar(evt){
    listaUsuarios = JSON.parse(evt.target.responseText);
    limpar();
    listaUsuarios.forEach(u => print(u));
}

function limpar(){
  while(divUsuarios.childNodes.length > 0){
        divUsuarios.removeChild(divUsuarios.firstChild);
    }  
}

function print(usuario){
    var p = document.createElement("p");
    p.textContent = usuario.username;
    divUsuarios.appendChild(p);
    return p;
}

function atualizarLista(){
    listaService = new XMLHttpRequest();
    listaService.open("get", "ListarUsuario");
    listaService.addEventListener("load",listar);
    listaService.send();
}

window.addEventListener("load",iniciar);
