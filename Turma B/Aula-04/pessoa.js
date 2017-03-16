function Pessoa(nome, sobrenome, idade, cpf, rg){
  this.nome = nome;
  this.sobrenome = sobrenome;
  this.idade = idade;
  this.cpf = cpf;
  this.rg = rg || 0;
  this.crescer = function(){
    return ++this.idade;
  }
}

var daniel = new Pessoa("Daniel","Savoy",36,999);
console.log(daniel);
