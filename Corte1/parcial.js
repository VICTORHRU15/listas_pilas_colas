 let numeros = [45,-12,78,0,23,-56,91,-34,12,67,-89,54,31,-7,18,99,-45,62,-73,11,5,-
21,84,0,37,16,-63,72,-5,48,26,-31,95,-14,52,7,-66,81,-9,60,13,-27,39,-42,74,88,-
53,29,-6,17,50,-75,68,-11,24,93,-38,41,-2,56,70,-80,22,-17,36,64,-44,10,83,-59,3,-
25,47,92, 68,19,35,-3,58,76,-71,14,69,-46,8,53,-60,32,85,-19,4,-34,97,27,-8,40,61,-
52,20,73,-41,12,66,-94,33,49,-16,82,-7,28,55,-63,90,-23,44,6,-39,71,-55,15,-
10,87,30,-47,96,38,-72,9,51,-28,63,-4,79,21,-58,34,65,-13,80,2,-36,59,94,-61,25,-
18,77,46,-30,1,67,-69,42,-15,57,74,-22,11,83,-54,31,60,-3,18,92,-44,37,8,-26,71,54,-
12,29,88,-70,13,48,-41,66,20,-7,95,34,-50,62,16,-19,73,27,-65,10,58,-33,84,39,-
2,91,-46,22,53,-78,4,67,-14,76,31,-5,49,82,-21,6,70,-37,94,28,-60,15,63,-8,45,-
24,52,11,-73,33,89,-40,7,56,-17,98,19,-32,61,43,-67,12,75,-4,36,80,-29,5,68,-
57,24,90,-11,41,-64,30,77,-6,55,3,-48,92,14,-26,71,47,-1,83,21,-52,64,9,-38,50,69,-
15,34,97,-23,18,72,-41,26,85,-9,53,7,-62,40,66,-20,88,13,-35,59,31,-74,95,44,-
8,22,63,-27,10,76,-56,37,91,-13,48,5,-69,82,17,-43,70,29,-6,58,94,-30,11,36,-
51,67,19,-72,84,2,-18,60,45,-7,33,79,-24,14,53,-61,92,27,-39,65,8,-44,73,12,-
55,40,87,-21,16,64,-3,52,28,-76,97,35,-14,68,6,-47,81,20,-9,59,41,-70,24,75,-
2,54,90,-36];

//Punto 1  


let suma = 0;

for(let i = 0; i< numeros.length; i++) {
    suma += numeros[i];


}


console.log("La suma total de los numeros es:",suma); 

//Punto 2

let ultimo = numeros[numeros.length - 1];
console.log("El ultimo elemento es:", ultimo); 


//Punto 3 -- ordenado por insercion

let numerosOrdenados = [...numeros];


    for(let i = 1; i < numerosOrdenados.length; i++){

        let actual = numerosOrdenados[i];
        let j = i - 1;

        while(j >= 0 && numerosOrdenados[j] > actual){
            numerosOrdenados[j + 1] = numerosOrdenados[j];
            j--;
        }

        numerosOrdenados[j + 1] = actual;

    }




console.log("Los numeros ordenados quedan asi:",numerosOrdenados); 

//Punto 4

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


let clave = [0,15,-6,9];

for(let i = 0; i < clave.length; i++){

    let resultado = busquedaBinaria(numerosOrdenados, clave[i]);

    if (resultado !== -1){
        console.log("Numero:", numerosOrdenados[resultado],
                    "Posicion:", resultado);
    }else{
        console.log("Elemento no encontrado:", clave[i]);
    }

}



//Punto 5

let frutas = []

// Punto 6

frutas.unshift("Naranja");
frutas.unshift("Mango");
frutas.unshift("Lulo");
frutas.unshift("Mandarina");
frutas.unshift("Piña");
frutas.unshift("Guanabana");
console.log(frutas);

//punto 7

let frutas1 = [];

for(let i = 0; i < frutas.length; i++){
    
    if(i % 2 !== 0){ // solo posiciones impares
        frutas1.push(frutas[i]);
    }

}

console.log("Las frutas quedan:", frutas1);

//Punto 8 ordenada por insercion


let frutasordenadas = [...frutas];


    for(let i = 1; i < frutasordenadas.length; i++){

        let actual = frutasordenadas[i];
        let j = i - 1;

        while(j >= 0 && frutasordenadas[j] > actual){
            frutasordenadas[j + 1] = frutasordenadas[j];
            j--;
        }

        frutasordenadas[j + 1] = actual;

    }




console.log("Las frutas ordenas quedan:",frutasordenadas); 
 