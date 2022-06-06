// 1 Perímetro de circulo dado el radio

let radCircle = Math.floor(Math.random() * 6) + 1;

function calcPeriCircle(){

    var result = 2 * Math.PI * radCircle;
    console.log("The perimeter of circle is" + "" + result);
}


//2 Área de circulo dado el radio

function calcAreaCirc(){

    var result = (radCircle * radCircle) * 2;
    console.log(result);
}


//3 Perímetro de cuadrado dado el lado

let edgeSquare = Math.floor(Math.random() * 6) + 1;

function calcPeriSquare(){

    var result = edgeSquare * 4;
    console.log("The perimeter of the square is" + ""+ result)
}

//4 Área de cuadrado con un lado

function calcAreaSquare(){

    var result = (edgeSquare * edgeSquare);
    console.log("Area of the square is" + "" + result);
}

//4 Hipotenusa de un triangulo rectangulo

var catetoA = Math.floor(Math.random() * 6) + 1;
var catetoB = Math.floor(Math.random() * 6) + 1;

function calcHipo() {
    
    var result = Math.sqrt((catetoA * catetoA) + (catetoB * catetoB));
    console.log(result);
}
