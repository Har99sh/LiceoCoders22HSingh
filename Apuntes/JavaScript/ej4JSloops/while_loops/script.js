
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

// let ix = 5;

// while (ix > 1){ 
//     px= "+" + "+" + "+" + "+" + "+";
//     lx = "+" 
//     console.log(px);  
//     while (ix < 5){
//         ix--; 
//         console.log(px - lx)
//     }
// }
// prueba de pirámide, sale de dos en dos
// let n = 0;
// while (n < 5){ nx= "+"; console.log(nx);  while (n < 5){n++; console.log(nx += nx)}}