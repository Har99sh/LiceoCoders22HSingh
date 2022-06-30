

//example for fetch

 //  GET request using fetch()
 fetch("https://jsonplaceholder.typicode.com/users?id=3")
 // Converting received data to JSON
 .then(response => response.json())
 .then(json => {


 
     // Create a variable to store HTML
     let li = `<tr><th>Name</th><th>Email</th><th>Phone</th></tr>`;
    
     // Loop through each data and add a table row
     json.forEach(user => {
         li += `<tr>
             <td>${user.name} </td>
             <td>${user.email}</td> 
             <td>${user.phone}</td>        
         </tr>`;
     });
 
 // Display result
 document.getElementById("users").innerHTML = li;
 });


 fetch("contents.json")
  .then(response => response.text()) 
  .then(data => {
    const json = JSON.parse(data);
    //console.log(json);
  })

//Asyn function example
async function fAsyncAwait() {

    let promise = new Promise((resolve, reject) => {
      setTimeout(() => resolve("¡He tardado 5 segundos!"), 5000)
    });
  
    let result = await promise; // espera hasta que la promesa se resuelva (*)
  
    console.log(result); // "¡Hecho!"
  }
  
  fAsyncAwait();


  //async await using a Thenable class

  class Thenable {
    constructor(num) {
      this.num = num;
    }
    then(resolve, reject) {
      // resuelve con this.num*2 después de 1000ms
      setTimeout(() => resolve(this.num * 2), 1000); // (*)
    }
  }
  
  async function fThenable() {
    // espera durante 1 segundo, entonces el resultado se vuelve 2
    let result = await new Thenable(1);
    alert("hola coders");
  }
  
  fThenable();
  

 


// POST request using fetch()
// fetch("contents.json", {
     
//     // Adding method type
//     method: "POST",
     
//     // Adding body or contents to send
//     body: JSON.stringify({
//         title: "foo",
//         body: "bar",
//         userId: 1
//     }),
     
//     // Adding headers to the request
//     headers: {
//         "Content-type": "application/json; charset=UTF-8"
//     }
// })
 
// // Converting to JSON
// .then(response => response.json())
 
// // Displaying results to console
// .then(json => console.log(json));

// (async () => {
//   const rawResponse = await fetch('data.js', {
//     method: 'POST',
//     headers: {
//       'Accept': 'application/json',
//       'Content-Type': 'application/json'
//     },
//     body: JSON.stringify({a: 1, b: 'Textual content'})
//   });
//   const content = await rawResponse.json();

//   console.log(content);
// })();