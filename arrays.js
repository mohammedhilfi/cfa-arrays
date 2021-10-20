//1 create an array of strings (has to be of at least length 5)

let animals = ['cat', 'dog', 'frog', 'rat', 'lion']

//2 print out the second element in the array
console.log(animals[1])

//3 print out the length of the array
console.log(animals.length)
//4 iterate over the array and print out each element
for (let i = 0; i < animals.length; i += 2) {
  console.log(animals[i])
}
//5 create a function that takes in a string and in the function iterate over each element in the array and for each element check if its equal to the parameter
// if it is then return that string
//else continue
function new (String){
  for (let i = 0; i < animals.length; i += 1) {
    if (String === animals[i]) {
      return animals[i];
    }
  }else {
    continue;
  }
}


//6 remove the last element from the array and then console.log the array

animals.pop()
console.log(animals)

//7 remove the first element from the array and then console.log the array

animals.shift()
console.log(animals)

//8 add a string to the end of the array and then console.log the array
animals.push("bird")
console.log(animals)
// add a string to the beginning of the array and then console.log the array
animals.unshift("fish")
console.log(animals)