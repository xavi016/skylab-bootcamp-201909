function splice(array) {
  if (!(array instanceof Array)) throw TypeError(array + ' is not an array');

  var array = arguments[0];
  var indexIni = arguments[1];
  var deleteCount = arguments[2] || arguments[2] === 0 ? arguments[2] : array.length - indexIni;
  var items = [];

  if (arguments[3]) {
    for (let i = 3; i < arguments.length; i++)
      items[i - 3] = arguments[i];
  };
  var newArray = [];

  if (items.length <= 0) {
    var counter = 0;
    for (var i = indexIni; i < indexIni + deleteCount; i++) {
      newArray[counter] = array[i];
      counter++;
    };
  };

  if (items.length > 0) {
    for (var i = 0; i < indexIni; i++) {
      newArray[i] = array[i];
    };
    for (let i = 0; i < items.length; i++) {
      newArray[newArray.length] = items[i];
    };
    for (var i = indexIni + deleteCount; i < array.length; i++) {
      newArray[newArray.length] = array[i];
    };
  };

  // modify the original array:
  array.length = newArray.length;
  for (let i = 0; i < newArray.length; i++) {
    array[i] = newArray[i];
  };
  return array;
};
