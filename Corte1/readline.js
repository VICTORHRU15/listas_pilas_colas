//Configurar readline

const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout

});


//funcion para preguntar

function preguntar(qs){
    return new Promise((r)=>{
        rl.question(qs, (answer)=>{
            r(answer);
        });


    });

}



async function main() {
    let nombre = await preguntar ("¿Cual es tu nombre:?");
    rl.close();
    console.log(nombre)
}

main();



