
  const titlesArray = [`Домик в деревне`, `Набережная мойки`, `Вилла в Шерегеше`, `Особняк на Рублевке`];
  const arrayDescription = [`Рай в шалаше`, `Канал Грибоедова`, `Горные шории`, `Беззаботное житье`];
  const arrayCheckinCheckout = [`12:00`, `13:00`, `14:00`];
  const arrayFeatures = [`wifi`, `dishwasher`, `parking`, `washer`, `elevator`, `conditioner`];
  const arrayPhotos = [`http://o0.github.io/assets/images/tokyo/hotel1.jpg`, `http://o0.github.io/assets/images/tokyo/hotel2.jpg`, `http://o0.github.io/assets/images/tokyo/hotel3.jpg`];
  const typeArray = [`palace`, `flat`, `house`, `bungalow`];
  const pinWidth = 90;
  const buttonPinHeight = 50
  const buttonPinWidth = 70;


  // Функция создания генерации цифр
  function getRandomNumber(min, max) {
    return Math.floor(min + Math.random() * (max + 1 - min));
  }

  function avatar(count) {
    let userArray = [];
    for (let i = 1; i <= count; i++) {
      if (i > 0 || i <= 9) {
        let j = `0` + i;
      userArray.push(`img/avatars/user` + j + `.png`);
      }
    }
    return userArray;
  }
  function randomArray(random) {
    for (let i = random.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      let count = random[i];
      random[i] = random[j];
      random[j] = count;
    }
    return random;
  }

  const avatarArray = avatar(8);
  const randomSortArray = randomArray(avatarArray);
  const arraySortCheckin = randomArray(arrayCheckinCheckout);
  const arraySortCheckout = randomArray(arrayCheckinCheckout);

  const locationСoordinates = function (min, max, count) {
    let locationArray = [];
    for (let i = 1; i <= count; i++) {
      locationArray.push({
        x: Math.floor(50 + Math.random() * (pinWidth - 50)) - buttonPinWidth / 2,
        y: Math.floor(min + Math.random() * (max - min)) - buttonPinHeight
      });
    }
    return locationArray;
  };
  const locations = locationСoordinates(130, 630, 8);

  function randomPinsArray(count) {
    let locationArray = [];
    for (let i = 0; i < count; i++) {
      locationArray.push({
        author: {
          avatar: randomSortArray[i]
        },
        offer: {
          title: titlesArray[Math.floor(Math.random() * (titlesArray.length))],
          address: locationСoordinates(350, 600, 1),
          price: getRandomNumber(1, 50000),
          type: typeArray[Math.floor(Math.random() * (typeArray.length))],
          rooms: getRandomNumber(1, 100),
          guests: getRandomNumber(1, 3),
          checkin: arraySortCheckin[i],
          checkout: arraySortCheckout[i],
          features: arrayFeatures[Math.floor(Math.random() * (arrayFeatures.length))],
          description: arrayDescription[Math.floor(Math.random() * (arrayDescription.length))],
          photos: arrayPhotos[Math.floor(Math.random() * (arrayPhotos.length))]
        },
        // locations: {
        //   x: locations[i].x,
        //   y: locations[i].y
        // },
        id: i
      });
    }
    return locationArray;
  }
  module.exports= {
    randomPinsArray
  }
