
// Ej 1 cuadrado de +++++

let cx = 0;

while (cx< 5) {
    let dx = "+++++";
    console.log(dx);
    cx++;
}

// Ej 2 pirámide +

let nx = 1;

while (nx < 5){ 
    mx= "+"; 
    console.log(mx);  
    while (nx < 5){
        nx++; 
        console.log(mx += "+")
    }
}

//Ej 2 priámide + invertida

let dx = 1;

while (dx < 5 ){ 
  
    vx = "+++++"; 
    console.log(vx);
    
      while (dx < 5) {
        sx = vx.slice(dx);
        console.log(sx);
        dx++;
      }

}


// prueba de pirámide, sale de dos en dos
// let n = 0;
// while (n < 5){ nx= "+"; console.log(nx);  while (n < 5){n++; console.log(nx += nx)}}