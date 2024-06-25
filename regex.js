let words = [
  'laboratory',
  'experiment',
  'flab',
  'Pans Labyrinth',
  'elaborate',
  'polar bear',
];


function allMatches(words, regex) {
  let allMatches = [];
  for (let i = 0; i < words.length; i += 1) {
    if (words[i].match(regex)) {
      allMatches.push(words[i]);
    }
  }
  return allMatches;
}

console.log(allMatches(words, /lab/)); // => ['laboratory', 'flab', 'elaborate']


// A more elegant solution:

function allMatchesA(words, pattern) {
  return words.filter((word) => pattern.test(word));
}

console.log(allMatchesA(words, /lab/)); // => ['laboratory', 'flab', 'elaborate']