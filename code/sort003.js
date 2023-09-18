
const words = [
  "apple",
  "dog",
  "elephant",
  "flower",
  "grape",
  "kiwi",
  "as",
  "lemon",
  "orange",
  "quilt",
  "strawberry",
  "I",
  "tiger",
  "watermelon",
  "a",
  "zebra"
];

// order by length of word, longest first
console.log(words.sort((a,b) => a.length > b.length ? -1 : 1));



