// 1 Perímetro de circulo dado el radio

let radCircle = 5;

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

let edgeSquare = 2;

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

var catetoA = 5;
var catetoB = 3;

function calcHipo() {
    var result = Math.sqrt((catetoA * catetoA) + (catetoB * catetoB));
    console.log(result);
}
