/**
 * @param {string[]} words
 * @param {string} order
 * @return {boolean}
 */
const isAlienSorted = (words, order) => {
  if (words.length <= 1) {
    return true;
  }
  for (let i = 0; i < words.length - 1; i++) {
    if (!compareWords(words[i], words[i + 1], order)) {
      return false;
    }
  }
  return true;
};

const compareWords = (w1, w2, order) => {
  const minLength = Math.min(w1.length, w2.length);
  for (let i = 0; i < minLength; i++) {
    if (compareChars(w1[i], w2[i], order) === "Equal") {
      continue;
    } else if (compareChars(w1[i], w2[i], order) === false) {
      return false;
    } else {
      return true;
    }
  }
  if (w1.length <= w2.length) {
    return true;
  } else {
    return false;
  }
}

const compareChars = (c1, c2, order) => {
  if (c1 === c2) {
    return "Equal";
  }
  for (let i = 0; i < order.length; i++) {
    if (order[i] === c1) {
      return true;
    }
    if (order[i] === c2) {
      return false;
    }
  }
}

console.log(isAlienSorted(["fxasxpc","dfbdrifhp","nwzgs","cmwqriv","ebulyfyve","miracx","sxckdwzv","dtijzluhts","wwbmnge","qmjwymmyox"], "zkgwaverfimqxbnctdplsjyohu"));