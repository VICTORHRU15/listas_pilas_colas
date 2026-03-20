//Busqueda lineal punto 3 y 4

function busquedaLineal(arreglo, valor) {
  for (let i = 0; i < arreglo.length; i++) {
    if (arreglo[i].codigo === valor) {
      return i; // retorna la posición
    }
  }
  return -1; // si no lo encuentra
}


function busquedaLineal(arreglo, valor) {
  for (let i = 0; i < arreglo.length; i++) {
    if (arreglo[i].nombre === valor) {
      return i; // retorna la posición
    }
  }
  return -1; // si no lo encuentra
}

let paises = [

    {nombre:"Colombia",codigo: "+57"},
    {nombre:"Argentina",codigo: "+54"},
    {nombre:"Brasil",codigo: "+55"},
    {nombre:"Chile",codigo: "+56"},
    {nombre:"Peru",codigo: "+51"},
    {nombre:"Mexico",codigo: "+52"},
    {nombre:"España",codigo: "+34"},
    {nombre:"Francia",codigo: "+33"},
    {nombre:"Alemania",codigo: "+49"},
    {nombre:"Italia",codigo: "+39"},
]

//Punto 1
for (let i = 0; i < paises.length; i++) {
  console.log(paises[i].nombre);
} 


//Punto 2

console.log("La longitud del arreglo es:",paises.length)

//Punto 3

/*let resultado = busquedaLineal(paises,"+52");

if (resultado !== -1){
    console.log("Elemento encontrado en la posicion:",resultado);
    console.log("El país es:", paises[resultado].nombre);


}else{
    console.log("Elemento no encontrado")

}*/


//Punto 4

/*let resultado = busquedaLineal(paises,"Francia");

if (resultado !== -1){
    console.log("Elemento encontrado en la posicion:",resultado);
    


}else{
    console.log("Elemento no encontrado")

}*/

//Punto 5

/*function ordenamientoBurbuja(arreglo){

    for(let i = 0; i < arreglo.length - 1; i++){

        for(let j = 0; j < arreglo.length - 1 - i; j++){

            if(arreglo[j].nombre > arreglo[j+1].nombre){

                let temp = arreglo[j];
                arreglo[j] = arreglo[j+1];
                arreglo[j+1] = temp;

            }

        }

    }

}

ordenamientoBurbuja(paises);

console.log("Arreglo ordenado por nombre:",paises);*/

//Punto 6

/*function ordenamientoInsercion(arreglo){

    for(let i = 1; i < arreglo.length; i++){

        let actual = arreglo[i];
        let j = i - 1;

        while(j >= 0 && arreglo[j].codigo > actual.codigo){
            arreglo[j + 1] = arreglo[j];
            j--;
        }

        arreglo[j + 1] = actual;

    }

}

ordenamientoInsercion(paises);

console.log("Arreglo ordenado por codigo:",paises);*/


//Punto 7


/*function ordenamientoBurbuja(arreglo){

    for(let i = 0; i < arreglo.length - 1; i++){

        for(let j = 0; j < arreglo.length - 1 - i; j++){

            if(arreglo[j].nombre > arreglo[j+1].nombre){

                let temp = arreglo[j];
                arreglo[j] = arreglo[j+1];
                arreglo[j+1] = temp;

            }

        }

    }


}
ordenamientoBurbuja(paises);

function busquedaBinaria(arreglo, valor) {
  let inicio = 0;
  let fin = arreglo.length - 1;

  while (inicio <= fin) {
    let medio = Math.floor((inicio + fin) / 2);

    if (arreglo[medio].nombre === valor) {
      return medio; // posición encontrada
    } 
    
    if (arreglo[medio].nombre < valor) {
      inicio = medio + 1; // buscar en la derecha
    } else {
      fin = medio - 1; // buscar en la izquierda
    }
  }

  return -1; // no encontrado
}


let clave = ["Brasil","Italia","Alemania"];

for(let i = 0; i < clave.length; i++){

    let resultado = busquedaBinaria(paises, clave[i]);

    if (resultado !== -1){
        console.log("Pais:", paises[resultado].nombre,
                    "Posicion:", resultado);
    }else{
        console.log("Elemento no encontrado:", clave[i]);
    }

}*/

//Punto 8   

/* let planetas = [];

//Punto 9


planetas.unshift("Mercurio");//Inicio
planetas.unshift("Venus");//Inicio
planetas.push("Tierra");//final
planetas.unshift("Marte");//Inicio
planetas.push("Jupiter");//final
console.log(planetas);

//Punto 10

planetas.pop();
planetas.pop();

console.log(planetas);
 */



