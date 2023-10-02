// ASSESSMENT 5: JavaScript Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------1) Create a function that takes in a string and returns a string with a coded message. The coded message converts "a" to 4, "e" to 3, "i" to 1, and "o" to 0.

// a) Create a test with expect statements using the variables provided.

describe("convertedStrings", () => {
    it("returns a coded message", () => {
    expect(convertedStrings(secretCodeWord1)).toEqual("L4ck4d4isic4l")
    expect(convertedStrings(secretCodeWord2)).toEqual("G0bbl3dyg00k")
    expect(convertedStrings(secretCodeWord3)).toEqual("3cc3ntr1c")

    })
})


const secretCodeWord1 = "Lackadaisical"
// Expected output: "L4ck4d41s1c4l"
const secretCodeWord2 = "Gobbledygook"
// Expected output: "G0bbl3dyg00k"
const secretCodeWord3 = "Eccentric"
// Expected output: "3cc3ntr1c"

// b) Create the function that makes the test pass.

const convertedStrings = (string) => {
    return string.replaceAll('a', 4/ 'e' 3/ 'i', 1/ 'o', 0)
}
console.log(convertedStrings(string))


// Pseudo code:

// input: String
// output: a different string (with converted letters)
// process: 
// -create a function that is called convertedStrings and the parameter is the strings. Using the ".replaceAll" method to affect all of the vowels listed in each string

// --------------------2) Create a function that takes in an array of words and a single letter and returns an array of all the words containing that particular letter.

// a) Create a test with expects statement using the variable provided.

describe("filteredFruits", () => {
    it("returns an array of all the words containing that particular letter", () => {
    expect(filteredFruits(filterLetterA)).toEqual(["Mango", "Apricot", "Peach"])
    expect(filteredFruits(filterLetterE)).toEqual(["Cherry", "Blueberry", "Peach"])

    })
})

const fruitArray = ["Mango", "Cherry", "Apricot", "Blueberry", "Peach", "Kiwi"]

const filterLetterA = "a"
// Expected output: ["Mango", "Apricot", "Peach"]
const filterLetterE = "e"
// Expected output: ["Cherry", "Blueberry", "Peach"]

// b) Create the function that makes the test pass.
const filteredFruits = (array) => {
    return array.sort("a", "e")
}
console.log(filteredFruits(array))


// Pseudo code:
// input: an array of words and a single letter 
// output: an array of all the words containing that particular letter
// process: -create a function that is called "filteredFruits" and the parameter is the arrays of strings...Using the "sort()" method to filter the strings that only contain the specified letters. 


// --------------------3) Create a function that takes in an array of 5 numbers and determines whether or not the array is a "full house". A full house is exactly one pair and one three of a kind.

// a) Create a test with expect statements using the variable provided.

describe("potentialFullHouse", () => {
    it("returns a true or false statement that determines whether or not the array is a full house", () => {
    expect(potentialFullHouse(hand1)).toEqual("true")
    expect(potentialFullHouse(hand2)).toEqual("false")
    expect(potentialFullHouse(hand3)).toEqual("false")
    expect(potentialFullHouse(hand4)).toEqual("true")


    })
})


const hand1 = [5, 5, 5, 3, 3]
// Expected output: true
const hand2 = [5, 5, 3, 3, 4]
// Expected output: false
const hand3 = [5, 5, 5, 5, 4]
// Expected output: false
const hand4 = [7, 2, 7, 2, 7]
// Expected output: true

// b) Create the function that makes the test pass.

const potentialFullHouse = (hand1, hand2, hand3, hand4) => {
    return array.some([] > 3)
}
console.log(potentialFullHouse.every(array))

// Pseudo code:
// input: an array of 5 numbers
// output: true or false response based on whether or not the array of numbers equates to a "full house". 
// process: -Using "every()" method(so that it affects each array element)...Using "some()" method to define T or F for each array
