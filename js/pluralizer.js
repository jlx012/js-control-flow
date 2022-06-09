// ### pluralizer.js
// Write a program that starts like...

// ```js
// let thing = 'cat';
// let count = 5;
// ```
// and outputs the pluralized form of the word, depending on what `count` is. For example, "5 cats" or "1 dog". 
// Change `thing` to different values to test your code!

// **Requirements**
// * Your program should pluralize the word based on an integer (`count`)

function howManyPets(pet, count) {
    if (count > 1) {
        console.log(count + " " + pet + "s!")
    }
    else {
        console.log(`${count} ${pet}!`)
    }
}

howManyPets('dog', 1)
