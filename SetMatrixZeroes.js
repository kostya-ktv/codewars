//https://leetcode.com/problems/set-matrix-zeroes/

const setZeroes = (matrix) => {
      let result = JSON.parse(JSON.stringify(matrix))

      const zeroFill = (zeroPosition) => {
            result[zeroPosition[0]] = result[zeroPosition[0]].map(el => 0)
            for(let i = 0; i < result.length; i ++) {
                  result[i][zeroPosition[1]] = 0
            }
      }
            for(let i = 0; i < matrix.length; i++) {
                  for(let j = 0; j < matrix[i].length; j++) {
                   if(matrix[i][j] == 0) zeroFill([i,j])
                  }
            }  
      return result
};

console.table(setZeroes([[1,1,1],[1,0,1],[1,1,1]]))
console.table(setZeroes([[0,1,2,0],[3,4,5,2],[1,3,1,5]]))
