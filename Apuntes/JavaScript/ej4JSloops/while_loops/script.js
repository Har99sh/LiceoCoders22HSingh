
// Ej 1 cuadrado de +++++

let ax = 0;

while (ax< 5) {
    let bx = "+++++";
    console.log(bx);
    cx++;
}

// Ej 2 pirámide +

let cx = 1;
let userInput = 15;

while (cx < userInput){ 
    dx= "+"; 
    console.log(dx);  
    while (cx < userInput){
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

let hx = 1;

function userInputPyramid(userNumber){
    while (hx < userNumber){ 
        ix= "+"; 
        console.log(ix);  
        while (hx < userNumber){
            console.log(ix += "+");
            hx++;
        }
    }

}

userInputPyramid(15);


// Función pirámide invertida

let jx = 1;

function myInvPyramid(myNumber){
    while (jx < myNumber ){ 
      
        kx = "+".repeat(myNumber); 
        console.log(kx);
        
        while (jx < myNumber) {
            lx = kx.slice(jx);
            console.log(lx);
            jx++;
        }
    }
}

myInvPyramid(20);


// prueba de pirámide, sale de dos en dos
// let n = 0;
// while (n < 5){ nx= "+"; console.log(nx);  while (n < 5){n++; console.log(nx += nx)}}