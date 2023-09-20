/**
 * @param {string[]} ideas
 * @return {number}
 */
const distinctNames = (ideas) => {
  let result = 0;
  for (let i = 0; i < ideas.length - 1; i++) {
    for (let j = i + 1; j < ideas.length; j++) {
      const afterSwap = swap(ideas[i], ideas[j]);
      if (!compareWord(afterSwap[0], ideas) && !compareWord(afterSwap[1], ideas)) {
        result += 2;
      }
    }
  }
  return result;
};

const swap = (idea1, idea2) => {
  const firstLetter1 = idea1[0];
  const firstLetter2 = idea2[0];
  
  const newWord1 = firstLetter2 + idea1.substring(1);
  const newWord2 = firstLetter1 + idea2.substring(1);

  return [newWord1, newWord2];
}

const compareWord = (word, ideas) => {
  if (ideas.includes(word)) {
    return true;
  } else {
    return false;
  }
}