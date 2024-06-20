/**
 * createGetter - creates function getter which allows select value from object
 * @param {string} path - the strings path separated by dot
 * @returns {function} - function-getter which allow get value from object by set path
 */
export function createGetter(path) {
  let properties = path.split(".");

  return function createGetter(obj) {
    if (Object.keys(obj).length === 0) {
      return;
    }

    for (let i = 0; i < properties.length; i++) {
      if (typeof obj[properties[i]] === "object") {
        if (obj[properties[i]] === null) {
          return null;
        }
        obj = obj[properties[i]];
        continue;
      }
      return obj[properties[i]];
    }
  };
}
