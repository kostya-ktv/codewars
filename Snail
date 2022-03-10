//https://www.codewars.com/kata/521c2db8ddc89b9b7a0000c1

function snail(array){
    let arr = array;
    let res = [];
    if(array.toString() == "") return res; 
    function eatRow(reverse){
        if(reverse){
        for(let x = arr.length-1; x >= 0; x--){
            res.push(arr[arr.length-1][x]);  
            arr[arr.length-1].pop() ; 
            }
            arr.pop();
            return;     
        }       
        for(let x = 0; x <= arr.length-1; x++){
            res.push(arr[0][x]);    
        }       
        arr.shift() ;   
    } 
    function eatColumn(reverse){   
        if(reverse){
            for(let x = arr.length-1; x >= 0; x--){
                res.push(arr[x][0]);
                arr[x].shift();
            }  
            return;   
        }
        for(let x = 0; x <= arr.length-1; x++){
            res.push(arr[x][arr.length]);
            arr[x].pop();
        }     
    }
        while(arr.length){
            eatRow();
            eatColumn();
            eatRow("reverse");
            eatColumn("reverse");
        }
   return res;
}
