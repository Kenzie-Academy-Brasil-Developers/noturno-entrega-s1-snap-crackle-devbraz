function snapCrackle (maxValue) {

    let myArray = []

    for (let counter = 1; counter <= maxValue; counter++) {

        if (counter % 2 === 1 && counter % 5 === 0) {
            myArray.push("SnapCrackle")
            
        } 
        
        else if (counter % 5 === 0) { 
             myArray.push("Crackle")

        }
        
        else if (counter % 2 === 1) {
            myArray.push("Snap")

        } else {
            myArray.push(counter)

        }
    
    }

    return myArray.toString(', ')

}

 console.log(snapCrackle(100))
