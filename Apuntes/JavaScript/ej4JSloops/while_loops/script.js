
// Ej 1 cuadrado de +++++

let ax = 0;

while (ax< 5) {
    let bx = "+++++";
    console.log(bx);
    cx++;
}

// Ej 2 pirámide +

let cx = 1;

while (cx < 5){ 
    dx= "+"; 
    console.log(dx);  
    while (cx < 5){
        cx++; 
        console.log(dx += "+")
    }
}

//Ej 3 priámide + invertida

let ex = 1;

while (ex < 5 ){ 
  
    fx = "+++++"; 
    console.log(fx);
    
      while (ex < 5) {
        gx = fx.slice(ex);
        console.log(gx);
        ex++;
      }

}

// Numero de filas de estrellas según el input de usuario

let userNumber = 15, hx = 0;

while (hx <= userNumber){ 
    ix= "+"; 
    console.log(ix);  
    while (hx <= userNumber){
        console.log(ix += "+");
        hx++;
    }
}


// prueba de pirámide, sale de dos en dos
// let n = 0;
// while (n < 5){ nx= "+"; console.log(nx);  while (n < 5){n++; console.log(nx += nx)}}