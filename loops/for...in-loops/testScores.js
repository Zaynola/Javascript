const testScores = {
    keenan: 80,
    damon: 67,
    kim: 89,
    shawn: 91,
    marlon: 72,
    dwayne: 77,
    nadia: 83,
    elvira: 97
}

// for (let person in testScores) {
//     console.log(person);
// }


// another way to get the key back in an array format is to run this
// const keysArray = Object.keys(testScores);
// console.log(keysArray);

//another way to get the key back in an array format is to run this
// const valuesArray = Object.values(testScores);
// console.log(valuesArray);

const keyValueArray = Object.entries(testScores);
console.log(keyValueArray);