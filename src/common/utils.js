function isArray(v) {
  return v && v.constructor === Array;
}

function isArrayHasValue(v) {
  return isArray(v) && v.length > 0;
}

module.exports = {
  isArray,
  isArrayHasValue,
};
