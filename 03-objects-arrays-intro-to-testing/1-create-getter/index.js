/**
 * createGetter - creates function getter which allows select value from object
 * @param {string} path - the strings path separated by dot
 * @returns {function} - function-getter which allow get value from object by set path
 */
export function createGetter(path) {
  const pathProperty = path.split('.');
  return function (obj) {
    for (const iter of pathProperty) {
      if (obj.hasOwnProperty(iter)) {
        obj = obj[iter];
      } else {
        return obj[iter];
      }
    }
    return obj;
  };
}
