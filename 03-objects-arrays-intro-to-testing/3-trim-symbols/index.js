/**
 * trimSymbols - removes consecutive identical symbols if they quantity bigger that size
 * @param {string} string - the initial string
 * @param {number} size - the allowed size of consecutive identical symbols
 * @returns {string} - the new string without extra symbols according passed size
 */
export function trimSymbols(string, size) {
  return getSameSymbolGroup(string)
    .map(value => (value.length > size) ? value.substring(0, size) : value)
    .join("");
}

function getSameSymbolGroup(str) {
  let arr = str.split("");
  let s = arr[0];
  let result = [];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i - 1] === arr[i]) {
      s = s + arr[i];
    } else {
      result.push(s);
      s = arr[i];
    }
    if (i === (arr.length - 1)) {
      result.push(s);
    }
  }
  return result;
}
