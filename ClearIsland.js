/* 
The task is to remove all spots on the island. 
A spot is a group of elements greater than 2, directed horizontally or vertically, but not diagonally. 
*/
const clearIsland = (island) => {
    let runningIndex = [0, 0]

    const run = () => {
        
        for (let externalIndex = runningIndex[0]; externalIndex < island.length; externalIndex++) {

            for (let internalIndex = runningIndex[1]; internalIndex < island.length; internalIndex++) {
                const currentElement = island[externalIndex][internalIndex]
                runningIndex[1]++
                
                if (currentElement) {
                    //Array<{element: [][], isChecked: boolean}>
                    let checkedElements = []
                    const currentIndexElement = [externalIndex, internalIndex]
                    checkedElements.push({ element: currentIndexElement, isChecked: false })
                    
                    while (checkedElements.length && checkedElements.some(el => el.isChecked === false)) {

                        const unCheckedIndex = checkedElements.findIndex(el => el.isChecked === false)
                        const siblings = getPositiveSiblings(checkedElements[unCheckedIndex].element, island)
                        const filteredSiblings = siblings.filter(sib => {
                            const exists = checkedElements.filter(checkEl => sib.element[0] === checkEl.element[0] && sib.element[1] === checkEl.element[1])
                            if(!exists.length) return sib
                        })
                        checkedElements = [...checkedElements, ...filteredSiblings]
                        checkedElements[unCheckedIndex].isChecked = true
                        
                    }
                    const spots = checkedElements.map(el => el.element)
                    removeSpots(spots)
                   
                }
                
            }
            /*  not to reset the value on the last element in the island 
                and get the last runningIndex
            */
            if (externalIndex !== island.length - 1) runningIndex[1] = 0
            
            runningIndex[0]++
        }
    }
    const removeSpots = (spots) => {

        if (spots.length > 1) {
            console.log(JSON.stringify(spots))
            spots.forEach(spot => {
                island[spot[0]][spot[1]] = 0
            })
        }  
    }
    const getPositiveSiblings = (currentIndex, incomingIsland) => {
        let top = undefined
        let bottom = undefined
        let left = undefined
        let right = undefined
        try {
            if (incomingIsland[currentIndex[0] - 1][currentIndex[1]]) {
                top = [currentIndex[0] - 1, currentIndex[1]]
            }
        } catch{}
        try {
            if (incomingIsland[currentIndex[0] + 1][currentIndex[1]]) {
                bottom = [currentIndex[0] + 1, currentIndex[1]]
            }
        } catch{}
        try {
            if (incomingIsland[currentIndex[0]][currentIndex[1] - 1]) {
                left = [currentIndex[0], currentIndex[1] - 1]
            }
        } catch{}
        try {
            if (incomingIsland[currentIndex[0]][currentIndex[1] + 1]) {
                right = [currentIndex[0], currentIndex[1] + 1]
            }
        } catch{}

        return [top, bottom, left, right]
            .filter(el => !!el)
            .map(el => ({ element: el, isChecked: false }))
    }

    //run to the last element
    while (runningIndex[0] !== island.length && runningIndex[1] !== island.length) {
        run()  
    }
  
    console.table(island)
    return island
}

const firstIsland = [
    [0,1,0,0,0],
    [1,0,0,1,0],
    [0,0,0,1,0],
    [1,0,1,1,1],
    [1,0,0,0,0],
]
const secondIsland = [
    [0,1,0,0,0],
    [1,1,0,1,0],
    [0,0,0,0,0],
    [1,0,1,0,1],
    [1,1,1,0,1],
]
clearIsland(firstIsland)
clearIsland(secondIsland)
