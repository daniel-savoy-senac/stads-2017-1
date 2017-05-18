function iniciar(){
    document.querySelector("#loginBtn")
            .addEventListener("click", submit);
}

function submit(){
    let form = document.querySelector("form#loginForm");
    let data = FormData2Str(new FormData(form));
    let param = {
        body: data,
        credentials: "same-origin",
        method: "POST",
        headers: {
             "Content-type": "application/x-www-form-urlencoded; charset=UTF-8"
         }
    };

    fetch("Autenticar",param)
            .then(r => r.json())
            .then(json => console.log(json));

}

function FormData2Str(fd){
    let vector = Array.from(fd);
    let text = vector.map(a => a[0]+"="+a[1]).join("&");
    return encodeURI(text);
}

window.addEventListener("load",iniciar);
