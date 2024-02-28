// Check functions which could help you solve these tasks https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String

// 1 =================================
// Write function to parameterize a string.
// Example:
// console.log(parametrize("Javascript is the best"));
// "javascript-is-the-best"

// Your code:
export const parametrize = (input) => {
    return input.toLowerCase().split(' ').join('-')
};

// 2 =================================
// Write function that takes object and return sentence
// Example:
// giveSentenceForPerson({name: "Obi-wan", position: "Jedi", age: 40, location: "Starwars universe"})
// ➞ Hello Obi-wan from Starwars universe! It is nice to meet you! You look awesome for your 40, young Jedi!

// Your code:
export const giveSentenceForPerson = (obj) => {
    return `Hello ${obj.name} from ${obj.location}! 
    It is nice to meet you! You look awesome for your ${obj.age}, young ${obj.position}!`
};

// 3 =================================
// Write function that takes string and replace all `a`, `e`, `i`, `o` with *
// Example:
// replace("Hello Javascript") ➞ "H*ll* J*v*scr*pt"

// Your code:
export const replace = (input) => {
    return input.replace(/[aeio]/g, '*')
};

// console.log(parametrize("Javascript is the best"));
// "javascript-is-the-best"
console.log('parametrize: ',parametrize("Javascript is the best"));

// giveSentenceForPerson({name: "Obi-wan", position: "Jedi", age: 40, location: "Starwars universe"})
// ➞ Hello Obi-wan from Starwars universe! It is nice to meet you! You look awesome for your 40, young Jedi!
console.log('giveSentenceForPerson: ',giveSentenceForPerson({name: "Obi-wan", position: "Jedi", age: 40, location: "Starwars universe"}));

// replace("Hello Javascript") ➞ "H*ll* J*v*scr*pt"
console.log('replace: ',replace("Hello Javascript"));