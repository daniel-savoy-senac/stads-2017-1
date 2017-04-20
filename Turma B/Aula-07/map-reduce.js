var valores = [0,1,2,3,4,5,6,7,8,9];


var print = (v) => {
  let e = document.createElement("div");
  e.textContent = v;
  document.body.appendChild(e);
}

print("Soma:"+valores.reduce((a,n)=>a+n));
