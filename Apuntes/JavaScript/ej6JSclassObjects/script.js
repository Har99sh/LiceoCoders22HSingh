let alumnos_json = (alumnos);


    // for (let i = 0; i <alumnos_json.length ; i++){
    // iJ = new alumno(alumnos_json[i]["nombre"],alumnos_json[i]["apellido"],alumnos_json[i]["edad"], alumnos_json[i]["ciudad"]);
    // console.log(iJ);
    // }
function getData(){
    
    bJ = new alumno(alumnos_json[0]["nombre"],alumnos_json[0]["apellido"],alumnos_json[0]["edad"], alumnos_json[0]["ciudad"]);
    return bJ;
}

function displayDara(){
    
    document.querySelector("main").innerHTML = bJ.structureHtml();

}



function main(){
    getData();
    displayDara();
}















// yoQueSe();
// al1 = new alumno(alumnos_json[0]["nombre"],alumnos_json[0]["apellido"],alumnos_json[0]["edad"], alumnos_json[0]["ciudad"]);

// console.log(al1);
