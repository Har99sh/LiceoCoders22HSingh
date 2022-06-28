/**1.Declare una función fullName e imprima su nombre completo. */

let fullName = (fullNameIs) => console.log(fullNameIs);
//fullName("harshdeep Singh");


//2. Declare una función fullName y ahora toma firstName, lastName como parámetro y devuelve su nombre completo.

let fullName2 = (name, surname) => console.log(name + " " + surname);
//fullName2("harsh", "singh")

//3. Suma de parametros

let sumOfTwo = (a,b) => console.log(a+b)
//sumOfTwo(2,3)

//4. Area of rectangle

let areaOfRectangle = (height, width) => console.log((height*width + " sqm"))
//areaOfRectangle(2,2)

//9. Density of

let density = (mass, volume) => console.log("density =  " + (mass/volume));
//density(1,2)

//12. Celsius to farenheit

let celToFAr = (celsius) => console.log(((celsius * (9/5)) + 32) + " farenheit")
//celToFAr(38)

//13 Body mass index

function bodyMassIndex(weightKG, heightM){
    let BMI = weightKG/(heightM*heightM);
    console.log(BMI)
    if ( BMI < 18.5){
        console.log("Low Weight")
    } else if ( 18.5 < BMI && BMI < 24.9){
        console.log("Normal Weight")
    } else if ( 25 < BMI && BMI < 29.9){
        console.log("Overweight")
    } else if (BMI > 30){
        console.log("Obese")
    }
}

//bodyMassIndex(50, 1.7)


//14 seasonCheck

function whatMonth () {
    let date = new Date();
    let month = date.getMonth();
    return month
}

function seasonCheck(month) {

}

//15 Max int checker

function maxNumber(a, b, c)

