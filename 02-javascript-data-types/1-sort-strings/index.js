/**
 * sortStrings - sorts array of string by two criteria "asc" or "desc"
 * @param {string[]} arr - the array of strings
 * @param {string} [param="asc"] param - the sorting type "asc" or "desc"
 * @returns {string[]}
 */
export function sortStrings(arr, param = 'asc') {

  let newArr = arr.slice();

  if (param === 'desc') {
    return newArr
      .sort((a, b) => compareIncludeRegister(a, b))
      .reverse();
  }

  return newArr.sort((a, b) => compareIncludeRegister(a, b));
}

function compareIncludeRegister(word1, word2) {
  if (isDifferentWordsJustFirsLetter(word1, word2)) {
    if (word1.charAt(0) === word2.charAt(0).toUpperCase()) {
      return -1;
    } else {
      return 1;
    }
  }

  return word1.localeCompare(word2, "ru");
}

function isDifferentWordsJustFirsLetter(word1, word2) {
  return (word1.toUpperCase() === word2.toUpperCase()) && (word1.charAt(0) !== word2.charAt(0));
}
