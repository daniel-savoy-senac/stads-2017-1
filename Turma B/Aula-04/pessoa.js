function Pessoa(nome, sobrenome, idade, cpf, rg){
  // PROPRIEDADES
  this.nome = nome;
  this.sobrenome = sobrenome;
  this.idade = idade;
  this.cpf = cpf;
  this.rg = rg || 0;
  this.filhos = [];
  // METODOS
  this.crescer = function(){
    return ++this.idade;
  }
  this.adotar = function(filho){
    this.filhos.push(filho);
  }
  this.desenhar = function(){
    var article = document.createElement("article");
    article.classList.add("pessoa");
    article.textContent = this.nome + " " +this.sobrenome;
    document.querySelector("body").appendChild(article);
  }
  //CONSTRUTOR
  this.desenhar();
}

var joao = new Pessoa("João","Silva");
var maria = new Pessoa("Maria","Silva");
var julia = new Pessoa("Júlia","Silva");
var victor = new Pessoa("Victor","Silva");
var ze = new Pessoa("Zé","Silva");

joao.adotar(maria);
joao.adotar(julia);
julia.adotar(victor);
julia.adotar(ze);
