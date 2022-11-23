function pow_array(dict_input){
    let array_in = [];  
    let array_out = [];
    S = 6;
    SS = parseInt(S.toString() + S.toString());
    
    for(const [key, value] of Object.entries(dict_input)){
        for(let i = 0; i< value.length; i++){
            array_in.push(value[i]);
        }
        }

    if (array_in.length>0){
        for (let i = 0; i < array_in.length; i++) {
            let num = Math.pow(array_in[i],2);
            
            if(num < SS){
                array_out.push(num);
            }
        }
    }else{
        throw new Error("the input array cannot be empty");
        }


    return array_out;
    
}

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
  
    // > {"array": [1, 2, 3, 5, 6, 8, 9]} -> [1, 4, 9, 25, 36, 64]
    // > {"array": [-2, -1]} -> [1, 4]
    // > {"array": [-6, -5, 0, 5, 6]} -> [0, 25, 25, 36, 36]
    // > {"array": [-10, 10]} -> []

let dict_input = {"array": [1, 2, 3, 5, 6, 8, 9]};

let a = (pow_array(dict_input));
console.log(a);
console.log(ordenarArray(a));

