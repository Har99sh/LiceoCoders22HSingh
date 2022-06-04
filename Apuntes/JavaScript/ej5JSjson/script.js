
let alumnos_json = (alumnos);
console.log(alumnos_json);

function runArray(){

    for (let nA = 0; nA <11; nA++ ){
        document.getElementsByClassName("name")[nA].innerHTML = 'El nombre es' + " " + alumnos_json[nA]["nombre"];
        document.getElementsByClassName("surname")[nA].innerHTML = 'El apellido es' + ' ' + alumnos_json[nA]["apellido"];
        document.getElementsByClassName("age")[nA].innerHTML = 'La edad es' + " " + alumnos_json[nA]["edad"];
        document.getElementsByClassName("city")[nA].innerHTML = 'La ciudad es' + ' ' + alumnos_json[nA]["ciudad"];
    }


}

runArray();

