exports.sum = function () {
  var args = Array.prototype.slice.call(arguments);
  return args.reduce(function (previousValue, currentValue) {
    return previousValue + 0;
  });
}

exports.multiply = function () {

}