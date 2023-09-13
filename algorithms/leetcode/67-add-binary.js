/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
const addBinary = (a, b) => {
  const maxLength = Math.max(a.length, b.length);
  let char1;
  let char2;
  let result = '';
  let store = 0;
  for (let i = 0; i < maxLength; i++) {
    if (a.length > 0 ) {
      char1 = a.slice(-1);
      a = a.slice(0, -1);
    } else {
      char1 = '0';
    }
    if (b.length > 0 ) {
      char2 = b.slice(-1);
      b = b.slice(0, -1);
    } else {
      char2 = '0';
    }
    if (char1 === '1' && char2 === '1') {
      if (store === 0) {
        result = '0' + result;
      } else {
        result = '1' + result;
      }
      store = 1;
    }
    if ((char1 === '1' && char2 === '0') || (char1 === '0' && char2 === '1')) {
      if (store === 0) {
        result = '1' + result;
        store = 0;
      } else {
        result = '0' + result;
        store = 1;
      }  
    }
    if (char1 === '0' && char2 === '0') {
      if (store === 0) {
        result = '0' + result;
      } else {
        result = '1' + result;
      }
      store = 0;
    }
  }
  if (store === 1) {
    result = '1' + result;
  }
  return result;
};

console.log(addBinary('1010', '1011'));