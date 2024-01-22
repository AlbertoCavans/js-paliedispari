/* PALINDROMI */
const word = prompt("Inserisci una parola");

/* REVERSING STRING */
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
