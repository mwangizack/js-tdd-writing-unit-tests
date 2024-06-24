// Your code here
export function pointsForWord(word) {
  const vowels = new Set(["a", "e", "i", "o", "u"]);
  const wordArray = word.toLowerCase().split("");
  let points = 0;
  for (let i = 0; i < wordArray.length; i++) {
    if (vowels.has(wordArray[i])) {
      points += 1;
    } else {
      points += 2;
    }
  }
  return points;
}
