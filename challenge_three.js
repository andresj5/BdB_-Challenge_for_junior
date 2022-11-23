
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

let sum = coins.reduce((a, b) => a + b, 0);
// console.log(sum);

let arr = Array.from({length: sum + 1}, (v, i) => i);
arr.shift();
// console.log(arr);
let results = coins.reduce((a,v) => a.concat(a.map(d => [v].concat(d))),[[]]);
results.shift();
// console.log(results);

for(let i = 0; i < results.length; i++){
    arr_results.push((results[i].reduce((a, b) => a + b, 0)));   
}

const no_repeats = arr_results.filter((valor, indice) => {
    return arr_results.indexOf(valor) === indice;
  }
);
// console.log(no_repeats);

let cont  = 0;
for(let i = 0; i< arr.length; i++){
    num1 = arr[i];
    num2 = no_repeats[i]

    if (num1 == num2){
        cont++;
    }
    
}let answer = cont + 1;
console.log(answer);

 
