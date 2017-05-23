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
    let obj = JSON.parse(evt.target.responseText);
    if(obj.nome){
        for(let i in obj){
            document.getElementsByName(i)[0].value = obj[i];
        }
    }else{
    obj.doidera.forEach(d => {
        let e = document.createElement("div");
        e.textContent = d;
        document.body.appendChild(e);
    });}
}

window.addEventListener("load",iniciar);


