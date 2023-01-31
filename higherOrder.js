// Researched mdn for higher order functions, and conditional statetments, and assistance from code reviewer
// https://developer.mozilla.org/en-US/docs/Glossary/First-class_Function
// https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/conditionals

let words = [
    "abroad",
    "fashion",
    "lawyer",
    "monumental",
    "accept",
    "archive",
    "design",
    "nest",
    "camera",
    "book",
];

//2
let myFilterFunction = (words, howManyLetters) => {
    
    //3
    let checkedWords = [];
    
    //4
    words.forEach(item => {

        //5
        if(howManyLetters(item)){
            checkedWords.push(item);
        }
    });

    //6
    return checkedWords;
}

//7
let howManyLetters = (word) => {

    return word.length === 6;
}

//8
console.log(myFilterFunction(words, howManyLetters));

/*
    Thinking:
        1. The program takes a string of words, checks to see if the length of each word is equal to 6, and, if so, adds them to a new array to be returned. We make use of two functions: "MyFilterFunction" adds our checked word to a new array based on the boolean result from our second function "howManyLetters".

        2. Takes two parameters: "words" is our array of words stored in "words". The second one "howManyLetters" holds our callback array "howManyLetters".

        3. Any words which have a length of 6 will be pushed here.

        4. We loop through our word's array using forEach to determine if the word should be added to our "checkedWord" array.

        5. We call our "howManyLetters" callback function, passing our word as its argument. A boolean value of true/false is produced based on the length of the word passed in. This word is pushed to "checkedWord" if its length matches 6.

        6. Our "myFilterFunction" returns any items contained in "checkedWord".

        7. "howManyLetters" is our callback function returning a value of true or false when it gets called inside our "MyFilterFunction".

        8. To ensure everything works, we call our "myFilterFunction", passing in our two arguments and print the result out to our console.
*/
