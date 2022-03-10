//https://www.codewars.com/kata/56882731514ec3ec3d000009
function whoIsWinner(piecesPositionList){
   let board = createBoard(6, 7)
   let turns = turnsParser(piecesPositionList)
   let winner = ''
   turns.some(turn => {
      setTurn(board, turn[0])
      if(isMatchOnRows(board) || isMatchOnColumns(board) || isMatchOnDiagonal(board) || isMatchOnDiagonal(JSON.parse(JSON.stringify(board)).reverse())){ 
         winner = turn[0][1];
         return true
      }
   });
return winner ? winner : "Draw"
}
function isMatchOnDiagonal(workBoard) {
  

   for(let row = 0; row < workBoard.length ; row++){
      let countMatch = ['', 0]
      for(let column = 0; column < workBoard[0].length ; column++) {
         for(let i = column, j = row; i < workBoard[0].length ; i++, j++){
            try { 
               if(workBoard[j][i] !== "*") {      
               if(workBoard[j][i] != countMatch[0]) {
                  countMatch = [workBoard[j][i], 1]         
               } else if (workBoard[j][i] == countMatch[0]){  
                  countMatch[1]++
               }
               if(countMatch[1] == 4)return true 
            }else{
               countMatch = ['*', 0]
            }
         } catch(error){}         
      }
   countMatch = ['', 0]
}}
   return false
}




function isMatchOnColumns (board) {

   for(let column = 0; column < board[0].length ; column++) {
      let countMatch = ['', 0]
      for(let row = 0; row < board.length ; row++){ 
         if(board[row][column] !== "*") {        
            if(board[row][column] != countMatch[0]) {
               countMatch = [board[row][column], 1]         
            } else if (board[row][column] == countMatch[0]){  
               countMatch[1]++
            }
            if(countMatch[1] == 4) return true 
         }else{
            countMatch = ['*', 0]
         }
      }
      countMatch = ['', 0]
   }
   return false
}

function isMatchOnRows (board) { 
   let countMatch = ['*', 0]
   for(let row = 0; row < board.length; row++) {     
      for(let column = 0; column < board[0].length; column ++) {
         if(board[row][column] !== "*") {        
            if(board[row][column] != countMatch[0]) {
               countMatch = [board[row][column], 1]         
            } else if (board[row][column] == countMatch[0]) countMatch[1]++
            if(countMatch[1] == 4) return true
         } else {
            countMatch = ['*', 0]
         }       
      }
      countMatch = ['*', 0]
   }
   
   return false
}

function setTurn (board, turn) {
   let index = board.length - 1;
   while(index >= 0) {    
      if(board[index][turn[0]] == '*'){
         board[index][turn[0]] = turn[1]
         break
      }
      index--;
   }
   return board
}

function turnsParser (turnsArr) {
   return turnsArr.map( el => {
      let turn = [];
      let turnPosition = el.slice(0, 1);
      let player = el.slice(2);
      switch (turnPosition) {
         case 'A': turnPosition = 0; break;
         case 'B': turnPosition = 1; break;
         case 'C': turnPosition = 2; break;
         case 'D': turnPosition = 3; break;
         case 'E': turnPosition = 4; break;
         case 'F': turnPosition = 5; break;
         case 'G': turnPosition = 6; break;       
         default: break;
      }
      turn.push([turnPosition, player])
      return turn
   })
   
}

function createBoard (rows, columns) {
   let board = [];
   for(let i = 0 ; i < rows; i++){
      board.push([])
      for(j = 0; j < columns; j++){
         board[board.length - 1].push('*')
      }
   }
   return board
}
