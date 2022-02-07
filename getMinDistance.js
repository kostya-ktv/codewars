function getMinDistanceBetween2equalNum() {
   let array = [1,1,1,3,4,5,6,9,5];
   let unique = Array.from(new Set(array));
   let indexes = [];
   let min = array.length;
   unique.forEach( el => {
      array.forEach( (arrEl, index) => {
         el == arrEl && indexes.push(index)
      })
      for (let i = 0; i < indexes.length; i ++){
         if(indexes[i + 1] > 0 && indexes[i + 1] != undefined) {
            indexes[i + 1] - indexes[i] < min ? min = indexes[i + 1] - indexes[i] : '';
         } 
      }
      indexes = [];
   })
   return min;
 }
