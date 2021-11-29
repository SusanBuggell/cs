const perf = require('execution-time')();

//Problem 1
perf.start()
dataSet1 = []; //False
dataSet2= [1];  //False
dataSet3= [1,2,3];  //False
dataSet4= [1,2,3,-2];  //True
dataSet5= [1, -1, 2, -2, 3, 4];//True

const addToZero = ((arr) =>{

    let includes = false;
    for(let i=0; i<arr.length; i++){
    
        if(arr.includes(-arr[i])){
        includes = true;
        }
    }

    return includes;

})

console.log("dataSet1: ",addToZero(dataSet1));
console.log("dataSet2: ",addToZero(dataSet2));
console.log("dataSet3: ",addToZero(dataSet3));
console.log("dataSet4: ",addToZero(dataSet4));
console.log("dataSet5: ",addToZero(dataSet5));


let step2_1=perf.stop();
console.log("Step 2 Problem 1 took:", step2_1.verboseWords, "to execute.");


//Problem 2
perf.start()
let test1 = "Monday";
let test2 = "Moonday";

const hasUniqueChars = ((word)=>{
    let wordArr= word.split("");
    let wordSet = new Set(wordArr);
    let wordSetArr = Array.from(wordSet);
    // console.log("wordArr: ",wordArr)
    // console.log("wordSet: ", wordSet)
    // console.log("wordSetArr: ", wordSetArr)

    for(let i=0; i<wordArr.length; i++){

        if (wordArr.length === wordSetArr.length){

            return true;

        }else{
        
        return false;

        }
    }
});

console.log("test 1: ", hasUniqueChars(test1));
console.log("test 2: ", hasUniqueChars(test2));

let step2_2 = perf.stop();
console.log("Step 2 Problem 2 took:", step2_2.verboseWords, "to execute.");


//Problem 3
perf.start()
let sen1 = "The quick brown fox jumps over the lazy dog!"
let sen2 = "I like cats, but not mice"

const isPanagram = ((sentence)=>{
    
    let lowerCaseSen= sentence.toLowerCase();
    // console.log("lowerCaseSen: ",lowerCaseSen);
    let onlyLettersSen = lowerCaseSen.replace(/[^a-z]/g,"");
    // console.log("onlyLettersSen: ", onlyLettersSen);
    let uniqueLetters = new Set (onlyLettersSen);
    // console.log("uniqueLetters: ",uniqueLetters)
    return((uniqueLetters.size === 26)? true : false)

});

console.log("isPanagram(1): ", isPanagram(sen1));
console.log("isPanagram(2): ", isPanagram(sen2));

let step2_3= perf.stop();
console.log("Step 2 Problem 3 took:", step2_3.verboseWords, "to execute.");


//Problem 4
perf.start();
const findLongestWord = ((arr)=>{

    let length=[];
    let lengthSorted = [];

    arr.forEach(element =>{

        length.push(element.length); 
        lengthSorted = length.sort((a,b)=>{return b-a});
        // console.log("lengthSorted: ",lengthSorted)

    })
    return lengthSorted[0];
})

let arr1=["hello", "goodbye", "JavaScript", "Python"];
console.log("The longest word in the array is:", findLongestWord(arr1), "characters long.");

let step2_4= perf.stop();
console.log("Step 2 Problem 4 took:", step2_4.verboseWords, "to execute.");

