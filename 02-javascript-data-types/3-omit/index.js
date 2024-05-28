/**
 * omit - creates an object composed of enumerable property fields
 * @param {object} obj - the source object
 * @param {...string} fields - the properties paths to omit
 * @returns {object} - returns the new object
 */
export const omit = (obj, ...fields) => {
  const newFields = Object.keys(obj).filter(key => !fields.includes(key));
  const newObj = {};

  Object.keys(obj)
    .forEach(key => {
      if (newFields.includes(key)) {
        newObj[key] = key;
      }
    });

  return newObj;
};
