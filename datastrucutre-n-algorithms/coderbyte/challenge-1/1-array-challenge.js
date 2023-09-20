const ArrayChallenge = (strArr) => { 
  const word = strArr[0];
  const arr = strArr[1].split(',');
  let result = '';
  for (let i = 0; i < arr.length; i++) {
    if (word.startsWith(arr[i])) {
      const remain = word.slice(arr[i].length);
      let foundResult = false;
      for (let j = 0; j < arr.length; j++) {
        if (j === i) {
          continue;
        }
        if (arr[j] === remain) {
          result = `${arr[i]},${arr[j]}`;
          foundResult = true;
          break;
        }
      }
      if (foundResult) {
        break;
      }
    }
  }
  if (result.length === 0) {
    result = 'not possible';
  }
  let finalOutput = `${result}fkzgs7b380`;
  let index = 2;
  while (index <= finalOutput.length) {
    finalOutput = finalOutput.substring(0, index) + 'X' + finalOutput.substring(index + 1);
    index += 3;
  }
  return finalOutput;
}

console.log(ArrayChallenge(["baseball", "base,a,all,b,bal,bas,cat,code,d,e,quit,z"]));