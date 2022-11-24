
// > {"coins": [5, 7, 1, 1, 2, 3, 22]} -> 20
// > {"coins": [1, 1, 1, 1, 1]} -> 6
// > {"coins": [1, 5, 1, 1, 1, 10, 15, 20, 100]} -> 55

function ordenarArray(list) {
    for (let j = 0; j < list.length - 1; j++) {
      let cont = 0;
        for (let i = 0; i < list.length - 1; i++) {
          if (list[i]> list[i + 1]) {
            cont = list[i + 1];
            list[i + 1] = list[i];
            list[i] = cont;
            }; 
        }; 
    }
    return list;
}

let coins = [1, 2, 4,7];
ordenarArray(coins);

let arr_results = [];

let sum = coins.reduce((a, b) => a + b, 0);     //Sumatoria de todas las monedas
// console.log(sum);

let arr = Array.from({length: sum + 1}, (v, i) => i);
arr.shift();                                             //Lista con valores de 1 a [sum]
// console.log(arr);
let results = coins.reduce((a,v) => a.concat(a.map(d => [v].concat(d))),[[]]); //Lista de listas con posibles 
results.shift();                                                                       //resultados
// console.log(results);

for(let i = 0; i < results.length; i++){
    arr_results.push((results[i].reduce((a, b) => a + b, 0)));  //Se suman los valores de cada una de las 
}                                                                               //listas
// console.log(arr_results)

const no_repeats = arr_results.filter((valor, indice) => { //Elimina todos los valores repetidos 
    return arr_results.indexOf(valor) === indice;                 //de la lista anterior
  }
);
// console.log(no_repeats);      

let cont  = 0;
for(let i = 0; i< arr.length; i++){
    num1 = arr[i];                   //Lista con valores de 1 a valor sumatoria. 
    num2 = no_repeats[i]             //Lista con posibles combinaciones

    if (num1 == num2){               //Si tiene valores iguales se suma 1 al contador
        cont++;                      //Si no hay valores en común para el contador en el valor para
    }                                //el cual ya no se puede dar cambio.
    
}let answer = cont + 1;             
console.log(answer);

 
