function viajar (destino) {
    if (destino === "Brasil") {
        console.log("Gire a la izquierda");
 } else if (destino === "Argentina") {
    console.log ("Gire a la Derecha");
 }  else if (destino === "Bolivia"){
    console.log("NO vayas por ahi");
 } else {
    console.log("Te perdiste");
 }
}

viajar ("caca");

function puedeManejar (edad) {
    if (edad >= 18){
        console.log("Si puede manejar");
    } else if (edad <= 18){
        console.log("No puede manejar");
    }
}

puedeManejar(23);