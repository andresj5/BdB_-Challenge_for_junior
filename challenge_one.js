function eliminate_S_number(list_input) {
    let arr2send = [];
    let array_out = [];
    S = 6;                              
    
    for (let i = 0; i < list_input.length; i++) {
        let num = list_input[i];                          //Número de la lista  
        
        let num2arr = String(num).split("").map((num)=>{  //Convierte el número en una lista
            return Number(num);                  
        })
        arr2send = [];                                    
        for(let j = 0; j < num2arr.length; j++) {
            
            if (num2arr[j] < S){
                arr2send.push(num2arr[j]);                 //Lista que no tendra valores > S
            }            
        }
        if (arr2send.length>0){                           //Para que no hayan erroes por lista vacia
            array_out.push((parseInt(arr2send.join(''))));//Se envia a la variable de salida
        }else{}

    }
    
    return array_out;
};

function ordered_arr(array_in){
    let cont = array_in.length;
    
    let arr_ordered = [];
    if (array_in.length>=2){                      //Array mayor o igual a 2 para poder hacer comparaciòn
        for (let i=0; i<array_in.length; i++){
            num0 = array_in[0];                   //Primer valor del array
            numn = array_in[array_in.length-1];   //Ùltimo valor del array
            if(num0 == 0){num0 = array_in[1]}
        }
        if(num0 > numn){       //Ordenado descendente -> se ordena en ascendente
            for(let j = 0; j<array_in.length; j++){
                cont --;
                arr_ordered.push(array_in[cont]);
                console.log(arr_ordered);
            }        
        }
        if(num0 < numn){      //Ordenado ascendente -> se ordena en descendente
            for(let j = 0; j<array_in.length; j++){
                cont --;      //cont es igual a la longitud del array de entrada, va disminuyendo
                arr_ordered.push(array_in[cont]);  //Agregando primero los ultimos valores.
                console.log(arr_ordered);
            }
        }
    }else{}

}

// > [1, 2, 3, 4, 5, 6] -> [5, 4, 3, 2, 1]
// > [10, 20, 30, 40] -> [40, 30, 20, 10]
// > [6] -> []
// > [66] -> []
// > [65] -> [5]
// > [6, 2, 1] -> [1 , 2]
// > [60, 6, 5, 4, 3, 2, 7, 7, 29, 1] -> [1, 2, 2, 3, 4, 5, 0]

let list_input = [];
list_input = [60, 6, 5, 4, 3, 2, 7, 7, 29, 1];
let n = list_input.length;


if (n<=100){
    let a = eliminate_S_number(list_input);
    let b = ordered_arr(a);
   
}else{
    throw new Error("The size of the list must be less or equal to 100");
    }
    








