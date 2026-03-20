/* function busquedaLineal(arreglo, valor) {
  for (let i = 0; i < arreglo.length; i++) {
    if (arreglo[i] === valor) {
      return i; // retorna la posición
    }
  }
  return -1; // si no lo encuentra
}

let numeros = [20,5,2,44,15];

let resultado = busquedaLineal(numeros, 44);

if (resultado !== -1){
    console.log("Elemento encontrado en la posicion:",resultado);


}else{
    console.log("Elemento no encontrado")

}

 */


// Busqueda Binaria


function busquedaBinaria(arreglo, valor) {
  let inicio = 0;
  let fin = arreglo.length - 1;

  while (inicio <= fin) {
    let medio = Math.floor((inicio + fin) / 2);

    if (arreglo[medio] === valor) {
      return medio; // posición encontrada
    } 
    
    if (arreglo[medio] < valor) {
      inicio = medio + 1; // buscar en la derecha
    } else {
      fin = medio - 1; // buscar en la izquierda
    }
  }

  return -1; // no encontrado
}



let ciudades = ["Bogota","Buenos aires","Lima","Madrid","Mexico"];
let temperatura = [14.0,18.5,19.2,15.6,20.3]

let clave = "Madrid";

let resultado = busquedaBinaria(ciudades,clave);

if (resultado !== -1){
    console.log("La ciudad es:",ciudades[resultado]);
    console.log("La temperatura es:",T)


}else{
    console.log("Elemento no encontrado")

}