var countChange = function(money, coins) {
      let myCoins = coins.sort()
      let matrix = []
      myCoins.unshift(0)
      while(myCoins.length){

            let coin = myCoins.shift()
            let row = []

            for(let i = 0; i <= money; i++){       
                  if(i === 0) {
                        row.push(1)
                      } else {
                              try {
                                    if(i - coin < 0) {
                                          row.push(matrix[matrix.length - 1][i]) 
                                    } else {
                                    row.push(row[i - coin] + matrix[matrix.length - 1][i])
                                    }
                              } catch (error) {
                                    row.push(0)
                              }       
                        }            
            }
            matrix.push(row)
      }
      return matrix[matrix.length - 1][matrix[matrix.length - 1].length - 1]
}
