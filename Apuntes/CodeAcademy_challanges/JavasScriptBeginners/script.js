//1. Print all even numbers from 0 – n

function printEvenNumber(n){
    for (i = 0; i <= n; i += 2){
      console.log(i);
    }
  }


//2. Print a table containing multiplication tables

function multiplicationTable(n){
    let x = n.toString();
    
    for (i = 0; i <= 10; i++){
        console.log(x + ' * ' + i + ' = ' + (n*i));
    }
}

function multiplicationTableInArray(n){
    let x = n.toString();
    let arrayOfMultiplication = [];
    
    for (i = 0; i <= 10; i++){
        let resultBe = x + ' * ' + i + ' = ' + (n*i);
        arrayOfMultiplication.push(resultBe);
    }
    console.log(arrayOfMultiplication);
}

function multiplicationTableUntilNumberWanted(n, y){
    let x = n.toString();
    
    for (i = 0; i <= y; i++){
        console.log(x + ' * ' + i + ' = ' + (n*i));
    }
}

//3. Unit converter km to miles or anything

function unitConverter(NumToBeConverted, unitName, convertedUnitNumEquivalent, newUnitInString){
    console.log(NumToBeConverted + ' ' + unitName + ' equals ' + (NumToBeConverted * convertedUnitNumEquivalent) + ' ' + newUnitInString)
}

//example unitConverter(10, 'km', 0.625, 'mi')


function kmToMiles(NumToBeConverted){
    console.log(NumToBeConverted + ' km equals ' + (NumToBeConverted/1.60934) + ' miles')
}

//4. Array elements sum of each

function sumArrayNumbers(myArray){
    for (i = 0; i < myArray.length; i++ ){
        console.log(myArray[i]+myArray[i + i])
    }
}

const numbers = [1, 2, 3, 4, 5];
function getSum(total, num) {
  return total + Math.round(num);
}

//console.log(numbers.reduce(getSum, 0));

//5.function that reverses an array

function reverseAnArray(myArray){
    let reversedArray = [];
    for (i = myArray.length - 1; i >= 0; i--){
        reversedArray.push(myArray[i]);
    }
    console.log(reversedArray)
}

// array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

function reverseAnArray(myArray){
    let reversedArray = [];
    for (i = myArray.length - 1; i >= 0; i--){
        reversedArray.push(myArray[i]);
    }
    console.log(reversedArray)
}

//reverseAnArray(createArray(50))

function createArray(indexAmount){
  let myArray = [];
  for (i = 0; i < indexAmount + 1; i++){
    myArray.push(i)
  }
  return myArray;
}

// 6. sort an array from min to max

let sortedArray = reverseAnArray(createArray(10)).sort(function (a, b){return a - b});
console.log(sortedArray);

//7.filter out negative numbers
function filterOutNegNums(anyArrayWithNegNums){
filterdArray = anyArrayWithNegNums.filter(function (a){return a > 0});
return filteredArray;
}

//8.take out the white space

let aString = "    this is a normal string";

//console.log(aString)

newString = aString.trim()

//console.log(newString)