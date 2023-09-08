function mayorYMenor (num){
    if(num > 5 && num < 10) console.log(true);
    else console.log (false);
}
mayorYMenor(7);

function mayorYMenorYPar (num){
    if(num > 5 && num < 10 && num % 2===0 ) console.log(true);
    else console.log (false);
}

mayorYMenorYPar(7);


function operadorOr (str){
    if(str === "Henry" || str.length<2) console.log(true);
    else console.log(false);
}

operadorOr("H");


function operadorNegacion(permiso){
    if(permiso === true) console.log("Tiene Permiso");
}


operadorNegacion(true);

function compleja(num){
    if(num > 9 && num % 2 === 0 || num === 3) console.log(true);
    else console.log(false);

}
compleja(12);