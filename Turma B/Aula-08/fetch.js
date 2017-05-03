function main(){

  fetch("data.json")
    .then(res => res.json())
    .then(obj => console.log(obj));

}


window.addEventListener("load",main);
