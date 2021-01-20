  var mapPinWidth = 50;
  var typeArray = ['palace', 'flat', 'house', 'bungalo'];

  function avatar(count) {
    var newArr = [];
    for (var i = 1; i <= count; i++) {
      var s = (i < 10) ? ('0' + i) : i;
      newArr.push('img/avatars/user' + s + '.png');
    }
    return newArr;
  }
  var avatarArray = avatar(8);

  function sortArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
    return array;
  }
  var sortedAvatarArray = sortArray(avatarArray);
  function locationsCoordinats(min, max, count) {
    var arr = [];
    for (var i = 1; i <= count; i++) {
      arr.push({
        x: Math.round(0 + Math.random() * (mapPinWidth - 0)),
        y: Math.round(min + Math.random() * (max - min))
      });
    }
    return arr;
  }
  var locations = locationsCoordinats(130, 630, 8);
  function generatePinArray(count) {
    var arr = [];
    for (var i = 0; i < count; i++) {
      arr.push({
        author: {
          avatar: sortedAvatarArray[i]
        },
        offer: {
          type: typeArray[0 + Math.floor(Math.random() * (typeArray.length - 0))]
        },
        location: {
          x: locations[i].x,
          y: locations[i].y
        }
      });
    }
    return arr;
  }
  var similarAds = generatePinArray(8);
module.exports = similarAds


