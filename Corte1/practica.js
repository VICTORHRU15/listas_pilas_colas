/* const readline = require ("readline");

const rl = readline.{createInterface({
    input: process.stdin,
    output: process.stdout

});

rl.question ("Ingrese su nombre: ", (nombre) =>{

console.log("Hola", nombre);

rl.close();

}); */



let club = ["Independiente"];


// Agregar un nuevo equipo  al final del array 


club.push("Real Madrd");
console.log(club);


//Agregar un nuevo equipo al inicio del array

club.unshift("America");
console.log(club);

//Actualizar un deporte en el array

club[1] = "Newells";
console.log(club);

club[club.length-1] = "Barcelona";
console.log(club);

//eliminar el ultimo deporte del array

club.pop();
console.log(club);

//Eliminar el primer deporte del array

club.shift();
console.log(club);

//mostrar tods los array

for (let i = 0; i < club.length; i++){

    console.log(club[i]);


}

//mostrar con for each

club.forEach(function(club){
    console.log(club);


})


