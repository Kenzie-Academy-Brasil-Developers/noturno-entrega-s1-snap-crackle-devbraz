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

    return myArray

}

console.log(snapCrackle(100))

/* Esse abaixo foi o que fui escrevendo e resolvendo os conflitos de outra maneira, 
com o myArray.pop, Ex: linha 54, quando o code da linha 54 era lido, já havia sido lido anteriormente o da 46 e 50,
por conta disso, minha resposta vinha como "Snap, Crackle, SnapCrackle",
com esse problema em mente resolvi usar o my myArray.pop() duas vezes, para tirar o Snap e o Crackle, ficando só o SnapCrackle,
claro, somente seria tirado os se entrasse na condição do if 54, se n estivesse na condição o code n rodava, então, funcionou bem!,
porém, achei meio "gambiarra", por conta disso resolvi refazer, ai veio o resultado acima da linha 1. */

// maxValue = 100

// function snapCrackle (maxValue) {

//     let myArray = []

//     for (let counter = 1; counter <= maxValue; counter++) {

//         if (counter % 2 === 1) {
//             myArray.push("Snap")
//         }
        
//         if (counter % 5 === 0) {
//             myArray.push("Crackle")
//         }

//         if (counter % 2 === 1 && counter % 5 === 0) {
//             myArray.pop()
//             myArray.pop()
//             myArray.push("SnapCrackle")
//         }

//         if (counter % 2 === 0) {
//             myArray.push(counter)
//         }
        

//         if (counter % 2 === 0 && counter % 5 === 0) {
//             myArray.pop()
//         }
        
//     }

//     return myArray

// }

// console.log(snapCrackle(100))


