
function diaDeLaSemana(dias) {
for(let i = 1; i < dias.length; i++){
   if (dias[i] === 1 || dias [i] === 7){
      return "Es fin de semana";
   } else if (dias[i] === 2 || dias[i] === 3 || dias[i] === 4 || dias[i] === 5 || dias[i] === 6) {
      return "Es dia laboral";
}
}
}

console.log(diaDeLaSemana (2));