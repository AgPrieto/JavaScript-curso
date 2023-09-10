class Persona  {
    constructor(nombre, edad) {
     this.nombre = nombre;
     this.edad = edad;

    }
    saludar(){
        console.log("Hola, mi nombre es " + this.nombre + " Y tengo " + this.edad + " años");
    }
}

class Programador extends Persona {
    constructor(nombre, edad, añosXp){
        super(nombre, edad);
        this.añosXp = añosXp;
    }
codear(){
    console.log ("Soy " + this.nombre + " Y tengo " + this.edad + " años," + "tengo " + this.añosXp + " años de experiencia.");
}

}

var agustin = new Persona("Agustin", 23);
agustin.saludar(); 
var programador = new Programador("Agustin", 23, 2);
programador.codear();