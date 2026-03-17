/* //Recorres una lista
for (let i = 0; i < lista.length; i ++){
console.log(lista[i]);

}

//recorres una lista con for of

for (let elemento of lista){
    console.log(elemento);

} */


let mercado = ["Tomate","Arroz","Sal"];

mercado.unshift("Azucar");

for (let i = 0; i < mercado.length; i ++){
console.log(mercado[i]);

}

mercado.pop();


console.log(mercado);

