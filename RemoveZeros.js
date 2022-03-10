//https://www.codewars.com/kata/52aae14aa7fd03d57400058f

function removeZeros(array) {
    let length = array.length;
        for(let i = length; i >= 0; i--){  
            if(array[i] === 0 || array[i] === '0'){
               for(let x = i; x <= length; x++){
                        if(array[x+1] === 0 || array[x+1] === '0') continue;
                         let tmp = array[x+1];                       
                         if(tmp === undefined) continue; 
                       array[x+1] = array[x];
                       array[x] = tmp; 
               }
            }
        }
    return array;
}
