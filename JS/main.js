/* PALINDROMI */
const word = prompt("Inserisci una parola");

/* FUNCTION REVERSING STRING */
function reverseWord(wordToReverse) {
  let reverse = "";

  for (let i = wordToReverse.length - 1; i >= 0; i--) {
    reverse += wordToReverse[i];
  }

  return reverse;
}

/* RESULT PALINDROMI */
const results = reverseWord(word);
if (word === results) {
  console.log("La parola è palindroma");
} else {
  console.log("La parola non è palindroma");
}

/* ODD OR EVEN */
const userOddEven = prompt("Scrivi pari oppure dispari!");
console.log(userOddEven);
const userNumber = parseInt(prompt("Scrivi un numero da 1 a 5!"));
console.log(userNumber);

/* FUNCTION PC RANDOM NUMBER FROM 1 TO 5 */
function randomNumber() {
  const number = Math.floor(Math.random() * 5 + 1);

  return number;
}

const computerNumber = parseInt(randomNumber());
console.log(computerNumber);
