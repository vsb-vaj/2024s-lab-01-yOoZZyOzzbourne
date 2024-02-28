// 1 =================================
// Create a function that takes two numbers as arguments (num, length) and returns an array of multiples of num until the array length reaches length.
// Examples
// arrayOfMultiples(7, 5) ➞ [7, 14, 21, 28, 35]
// arrayOfMultiples(12, 10) ➞ [12, 24, 36, 48, 60, 72, 84, 96, 108, 120]
// arrayOfMultiples(17, 6) ➞ [17, 34, 51, 68, 85, 102]

// Your code:
export const arrayOfMultiples = (num, length) => {
    let multiples = []
    for (let i = 1; i <= length; i++) {
        multiples.push(num * i)
    }
    return multiples
};

// 2 =================================
// Change direction of array
// TIP: Check if there is function which can help you https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
// Example:
// changeDirection([0, 1, 2, 3]) ➞ [3, 2, 1, 0]
// changeDirection([]) ➞ []
// changeDirection([1, 2]) ➞ [2, 1]

// Your code:
export const changeDirection = (array) => {
    return array.reverse()
};

// 3 =================================
// Create function that takes two arrays and return object with two keys - bigger array, sum all numbers
// Examples
// biggerArray([1,2,3,4,5], [50,50]) ➞ { array: [50,50], sum: 100 }
// biggerArray([1,2,3], [2,3,4]) ➞ { array: [2,3,4], sum: 9 }

// Your code:
export const biggerArray = (array1, array2) => {
    let bigger = array1.length >= array2.length ? array1 : array2
    let sum = bigger.reduce((accumulator, currentValue) => accumulator + currentValue, 0)
    return { array: bigger, sum: sum }
};

// Calling functions for testing 

// arrayOfMultiples(7, 5) ➞ [7, 14, 21, 28, 35]
// arrayOfMultiples(12, 10) ➞ [12, 24, 36, 48, 60, 72, 84, 96, 108, 120]
// arrayOfMultiples(17, 6) ➞ [17, 34, 51, 68, 85, 102]
console.log('arrayOfMultiples:', arrayOfMultiples(7, 5))
console.log('arrayOfMultiples:', arrayOfMultiples(12, 10))
console.log('arrayOfMultiples:', arrayOfMultiples(17, 6))

// changeDirection([0, 1, 2, 3]) ➞ [3, 2, 1, 0]
// changeDirection([]) ➞ []
// changeDirection([1, 2]) ➞ [2, 1]
console.log('changeDirection:', changeDirection([0, 1, 2, 3]))
console.log('changeDirection:', changeDirection([]))
console.log('changeDirection:', changeDirection([1, 2]))

// biggerArray([1,2,3,4,5], [50,50]) ➞ { array: [50,50], sum: 100 }
// biggerArray([1,2,3], [2,3,4]) ➞ { array: [2,3,4], sum: 9 }
console.log('biggerArray:', biggerArray([1, 2, 3, 4, 5], [50, 50]))
console.log('biggerArray:', biggerArray([1, 2, 3], [2, 3, 4]))
