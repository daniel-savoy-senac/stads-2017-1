function ligar(categoria){
  var b = document.querySelector("body");
  b.classList.toggle(categoria);
}

document.querySelector("button:nth-of-type(1)").addEventListener("click",function(){ligar("a")});

document.querySelector("button:nth-of-type(2)").addEventListener("click",function(){ligar("b")});

document.querySelector("button:nth-of-type(3)").addEventListener("click",function(){ligar("c")});

document.querySelector("button:nth-of-type(4)").addEventListener("click",function(){ligar("d")});

document.querySelector("button:nth-of-type(5)").addEventListener("click",function(){ligar("e")});

document.querySelector("button:nth-of-type(6)").addEventListener("click",function(){ligar("f")});

document.querySelector("button:nth-of-type(7)").addEventListener("click",function(){ligar("g")});
