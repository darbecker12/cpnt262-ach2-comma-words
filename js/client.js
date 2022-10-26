// Variable for paragraph insert
const added = document.querySelector('.added');

// Variable for the starting sentence
let sentence = "List of Calgary sports teams: ";

// Array of Words
const wordList = [
  "Flames",
  "Wranglers",
  "Hitmen",
  "Roughnecks",
  "Stampeders"
];

// Getting the number of words in the array
const numberWords = wordList.length;

// For loop to run through the words
for(let i = 0; i < numberWords; i++) {
  //Excluding the last word
  if(i < numberWords - 1){
  sentence += wordList[i] + ", ";
  }
  // Else if for the last word
  else if(i = numberWords){
    sentence += "and " + wordList[numberWords-1] + '.';
    console.log(sentence); 
    }
};

// Inserting the sentence into the page
added.innerHTML = `${sentence}`;

