async function f() {

    let promise = new Promise((resolve, reject) => {
      setTimeout(() => resolve("¡Hecho!"), 5000)
    });
  
    let result = await promise; // espera hasta que la promesa se resuelva (*)
  
    console.log(result); // "¡Hecho!"
  }
  
  //f();
  