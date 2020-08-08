import isNull from './isNull';
/**
 * Checks if `value` is an object,
 *
 * @param {*} value
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 */
export default value => !isNull(value) && typeof value === 'object';
