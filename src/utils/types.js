export function isObject(obj) {
  return Object.prototype.toString.call(obj) === '[object Object]'
}

export function isNumber(num) {
  return typeof num === 'number'
}
