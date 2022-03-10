//https://www.codewars.com/kata/520446778469526ec0000001
Array.prototype.sameStructureAs = function (second) {
    let first = this;
    if((Array.isArray(first) && !(Array.isArray(second))) || (Array.isArray(second) && !(Array.isArray(first)))) return false;
        for(let i = 0; i < first.length; i++){
             if(checkNested(first[i], second[i]) == false) return false
            }
    return true
};
 
function checkNested(val1, val2){
    if((Array.isArray(val1) && !(Array.isArray(val2))) || ((Array.isArray(val2) && !(Array.isArray(val1))))) return false
  
    if((Array.isArray(val1)) && (Array.isArray(val2))){
        if(val1.length != val2.length) return false;
        for(let i = 0; i < val1.length; i++){
            console.log(val1[i] + " " + val2[i]);
            if(checkNested(val1[i], val2[i]) == false) return false;
        }
     }
}
