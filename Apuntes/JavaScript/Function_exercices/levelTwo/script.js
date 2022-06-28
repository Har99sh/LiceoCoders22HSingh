//2. Quad equation

function quadEquation (a, b, c){
    let positiveB = ( -b + (Math.sqrt((b*b)-(4*a*c))));
    let negativeB = ( -b - (Math.sqrt((b*b)-(4*a*c))));
    let denominator = (2 * a);
    let res1 = positiveB/denominator;
    let res2 = negativeB/denominator;
    console.log(res1 + ", " + res2 )
}

//quadEquation(2, -11, 14)

// 5. value swaper for params

function swapValue( a, b){
   temp = a;
   a = b;
   b = temp;
   console.log("a = " + a + " b = " + b)
}

//swapValue('hello', 2)

//RGB Creater

function rgbMixer (r, g , b){
    document.getElementsByClassName('rgbOutput')[0].style.background = 'rgb(' + r + ', ' + g + ', ' + b + ')';
}

rgbMixer(25, 56, 26)