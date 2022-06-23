class alumno {
    constructor (nombre, apellido, edad, ciudad){
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
        this.ciudad = ciudad;
    }

 
    structureHtml (){
        htmlStrucToHTML = '<article class="student"><div class="name">'+this.nombre+'</div><div class="surname">'+this.apellido+'</div><div class="age">'+this.edad+'</div><div class="city">'+this.ciudad+'</div></article>'; 
        return htmlStrucToHTML;       
    }

    
}