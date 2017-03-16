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
  //CONSTRUTOR
}

var joao = new Pessoa("João");
var maria = new Pessoa("Maria");
var julia = new Pessoa("Júlia");
var victor = new Pessoa("Victor");
var ze = new Pessoa("Zé");

joao.adotar(maria);
joao.adotar(julia);
julia.adotar(victor);
julia.adotar(ze);
