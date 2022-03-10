//https://www.codewars.com/kata/529bf0e9bdf7657179000008

function validSolution(board){

  function checkRow(row){
    let set = new Set(board[row].map((el) => {return el}));
   return set.size == 9;  
  }
  
  function checkColumn(column){
    let set = new Set();
    for(let el of board){
      set.add(el[column]);
    }
  return set.size == 9; 
  }
  function getSquares(board){

    for(let x = 0; x <= 6; x+=3){
      for(let y = 0; y <= 6; y+=3){

        let set = new Set();
        for(let xx = x; xx <= x+ 2; xx++){
          
          if(!checkRow(xx)) return false

          for(let yy = y; yy <=y + 2;yy++){
            
            if(!checkColumn(yy)) return false
              if(set.has(board[xx][yy])){
                return false
              }else{
                set.add(board[xx][yy])
              }
          }
        }
        set.clear()
      }
    }
    return true;
    }
    return getSquares(board)
    
  }
