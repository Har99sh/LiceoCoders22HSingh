let target = 7;

let numArray = [6, 10, 15, 13, 3, 2, 5, 4, 6, 8, 3, 9];
console.log("Original array is" + " " + numArray)

numArray = numArray.sort(function(a,b){return a-b});

function checkNum(smaller){
    return smaller < target;
}

numArray = numArray.filter(checkNum);

console.log("Sorted and filtered array is" + " " +numArray);
console.log("Target number is" +" " + target)

function findIndex(){
  i = 0;
  j = 1;
    while(i < numArray.length, j < numArray.length){
      sumNum = numArray[i] + numArray[j];
      if (sumNum == target){
        console.log("First index is" + " " + numArray.indexOf(numArray[i]) + " " + "the number is" + " " + numArray[i]);
        console.log("Second index is" + " " + numArray.indexOf(numArray[j])+ " " + "the number is" + " " + numArray[j]);
      } 
      i++;
      if (sumNum != target){ j++;}
      
    }
}

findIndex();