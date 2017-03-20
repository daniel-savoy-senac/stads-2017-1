function Pessoa(n,s,i){
  this.nome = n;
  this.sobrenome = s;
  this.idade = i;
  this.filhos = [];
  this.crescer = function(){
    return ++this.idade;
  }
}

var joao = new Pessoa("João", "Patati", 98);
var ze = new Pessoa("Zé", "Patati", 60);
var clodoaldo = new Pessoa("Clodoaldo", "Patati", 63);
var julia = new Pessoa("Júlia", "Patati", 40);
var maria = new Pessoa("Maria", "Patati", 36);
var chico = new Pessoa("Chico", "Patati", 10);

joao.filhos.push(ze);
joao.filhos.push(clodoaldo);
clodoaldo.filhos.push(julia);
clodoaldo.filhos.push(maria);
maria.filhos.push(chico);

console.log(joao);

function imprimir(){
  //nome, sobrenome, idade, qtdade de filhos
  var x = document.createElement("article");
  x.classList.add("pessoa");
  x.textContent = "Silvia Silva";
  document.body.appendChild(x);
}
