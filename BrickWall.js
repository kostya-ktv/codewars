
const brickSlice = (temp) => {
      const res = {}
      temp.forEach((el, i) => {
            el.forEach((n, index) => {
                  if(n > 1) temp[i][index] = [...new Array(n-1).fill(0), 1]
            })      
            el.flat().forEach((el,i) => {
                  if(!res[i + 1]) res[i + 1] = 0
                  res[i + 1] += el
            })       
      })
     return Object.entries(res).sort((a,b) => a[1] - b[1])[0]
}
