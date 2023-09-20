function StringChallenge(str) { 
  // code goes here  
  const characters = str.split(' ')[0].split('');
  const string = str.split(' ')[1].split('');

  const alphabetReg = new RegExp(/[a-zA-z]/);
  const numberReg = new RegExp(/[1-9]/);

  const isSameCharacters = (arr) => {
    const value = arr.shift();
    while (arr.length > 0) {
      if (arr.shift() !== value) {
        return false;
      }
    }
    return true;
  }

  const checkNumberInArr = (arr) => {
    arr.shift();
    arr.pop();
    let result = 0
    for (let i = 0; i < arr.length; i++) {
      result += arr[i] * Math.pow(10, arr.length - 1 - i);
    }
    return result;
  }

  while (characters.length > 0) {
    const char = characters.shift();
    if (char === '+') {
      const stringChar = string.shift();
      if (!alphabetReg.test(stringChar)) {
        return false;
      }
    }
    else if (char === '$') {
      const stringChar = string.shift();
      if (!numberReg.test(stringChar)) {
        return false;
      }
    }
    else if (char === '*') {
      let n = 3;
      if (characters[0] === '{') {
        for (let i = 0; i < characters.length; i++) {
          if (characters[i] === '}') {
            const tempArr =  characters.splice(0, i + 1);
            n = checkNumberInArr(tempArr);
          }
        }
      }
      if (string.length < n) {
        return false
      }
      const sequenceChars = string.splice(0, n);
      if (!isSameCharacters(sequenceChars)) {
        return false;
      }
    }
  }
  return string.length === 0;
}
   
// keep this function call here 
console.log(StringChallenge("*{12} ddddddddddd"));