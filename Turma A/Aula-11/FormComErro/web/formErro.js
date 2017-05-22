function iniciar(){
    document.querySelector("#jsonBtn").addEventListener("click", submeter);
}

function submeter(){
    let f = document.querySelector("form");
    let fd = new FormData(f);
    let xhr = new XMLHttpRequest();
    let p = ""; 
    fd.forEach((v,k) => p+= k+"="+v+"&");
    xhr.open("get","CadastrarJSON?"+p);
    xhr.addEventListener("load",retornar);
    xhr.send();
}

function retornar(evt){
    console.log(evt.target.responseText);
}

window.addEventListener("load",iniciar);


