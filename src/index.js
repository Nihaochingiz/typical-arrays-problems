
exports.min = function min (Array ) {
  return Math.min.apply(null, Array);
}

exports.max = function max (Array ) {
  return Math.max.apply(null, Array);
}

exports.avg = function avg (Array ) {
  return Array.reduce((a, b) => (a + b)) / Array.length;
}
