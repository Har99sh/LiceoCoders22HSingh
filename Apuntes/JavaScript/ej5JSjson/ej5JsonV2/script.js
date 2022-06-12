let alumnos_json = (alumnos);
console.log(alumnos_json.length);

function createContent() {
    let yevaBeAnnoyed = "";

    for (let i = 0; i < alumnos_json.length; i++){
        yevaBeAnnoyed += '<article class="student"><div class="name"></div><div class="surname"></div><div class="age"></div><div class="city"></div></article>';        
    }
    
    document.getElementsByClassName("content")[0].innerHTML = yevaBeAnnoyed;
        
    function fillContent(){
            for (let nA = 0; nA < alumnos_json.length; nA++ ){
            document.getElementsByClassName("name")[nA].innerHTML = "El nombre es" + " " + alumnos_json[nA]["nombre"];
            document.getElementsByClassName("surname")[nA].innerHTML = "El apellido es" + " " + alumnos_json[nA]["apellido"];
            document.getElementsByClassName("age")[nA].innerHTML = "La edad es" + " " + alumnos_json[nA]["edad"];
            document.getElementsByClassName("city")[nA].innerHTML = "La ciudad es" + " " + alumnos_json[nA]["ciudad"];  
        }  
    }
    fillContent();

}

document.getElementsByClassName("work")[0].addEventListener("click", createContent);

function eduLife(){

   document.getElementsByClassName("content")[0].innerHTML =  '<p>hello world</p>';
}

document.getElementsByClassName("edu")[0].addEventListener("click", eduLife);


function timeDate(){
   document.getElementsByClassName("content")[0].innerHTML = Date();
}

document.getElementsByClassName("time")[0].addEventListener("click", timeDate);
