/**
 * pick - Creates an object composed of the picked object properties:
 * @param {object} obj - the source object
 * @param {...string} fields - the properties paths to pick
 * @returns {object} - returns the new object
 */
export const pick = (obj, ...fields) => {

  const newFields = Object.keys(obj).filter(key => fields.includes(key));

  const newObj = {};

  Object.keys(obj)
    .forEach(key => {
      if (newFields.includes(key)) {
        newObj[key] = key;
      }
    });

  return newObj;
};
