var valores = [0,1,2,3,4,5,6,7,8,9,11];

var pessoas = [
  {"nome":"Daniel", "idade":36},
  {"nome":"Victor", "idade":23},
  {"nome":"Silvia", "idade":43},
  {"nome":"Heloiza", "idade":12}
];


var print = (v) => {
  let e = document.createElement("div");
  e.textContent = v;
  document.body.appendChild(e);
}

print("Idade Média:"+pessoas.reduce((a,n)=>a+n.idade,0)/pessoas.length);
print("Média:"+valores.reduce((a,n)=>a+n)/valores.length);
print("Tem maior que 10?:"+valores.some(n=>n>10));
print("TODOS maiores que -1?:"+valores.every(n=>n>-1));




//valores.map(n => n*n).forEach(n => print(n));

/*

  MAP - cria um vetor a partir de outro vetor
  REDUCE - cria um único valor a partir de um vetor
  FOREACH - percorre o vetor
  JOIN - transforma o vetor em uma string (inverso é SPLIT)
  EVERY - se todo o vetor cumpre uma condição
  SOME - se alguém cumpre uma condição
  FILTER - retorna um vetor com apenas os valores que cumpram a condição
  SORT - orderna o vetor de acordo com a função
  REVERSE - retorna o vetor na ordem reversa

*/
