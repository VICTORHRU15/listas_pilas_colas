// Principio LIFO (Last in, First Out)-- Ultimo en entrar primero en sali

let pila = []

//agregar elementos a la pila

pila.push(1);
pila.push(2);
pila.push(3);
console.log(pila);

//Eliminar elementos de la pila

let elementoseliminado = pila.pop();
console.log (elementoseliminado);

//mostrar primer elemento en la pila
let primerelemento = pila[pila.length - 1];
console.log (primerelemento);


if (pila.length===0){
    console.log("La pila esta vacia")

}