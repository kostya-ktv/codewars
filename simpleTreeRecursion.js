const tree = { 
      value: 4,
      left: {
            value: 3,
      },
      right: {
            value: 9,
            left: {
                  value: 33
            },
            right: {
                  value: 12
            }
      }
}

function sumOfTreeValues (tree){
      let sum = tree.value
      if(tree.left) sum += sumOfTreeValues(tree.left)
      if(tree.right) sum += sumOfTreeValues(tree.right)
      return sum
}
