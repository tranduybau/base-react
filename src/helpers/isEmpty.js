import isNull from './isNull';
import isString from './isString';
import isObject from './isObject';
/**
 * Checks if `value` is empty,
 *
 * @param {*} value
 * @returns {boolean} Returns `true` if `value` is empty, else `false`.
 * @example
 *
 * isEmpty(null)
 * // => true
 *
 * isEmpty(true)
 * // => true
 *
 * isEmpty(1)
 * // => true
 *
 * isEmpty('abc')
 * // => false
 *
 * isEmpty([1])
 * // => false
 *
 * isEmpty({ 'a': 1 })
 * // => false
 */
export default function isEmpty(value) {
  if (isNull(value)) return true;
  if (Array.isArray(value) || isString(value)) return value.length === 0;
  if (isObject(value)) return Object.keys(value).length === 0;
  return true;
}
