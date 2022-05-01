const {NotImplementedError} = require ('../extensions/index.js');

function getSeason (date) {
  if (!date) return 'Unable to determine the time of year!';

  if (typeof date.getMonth != 'function' || date.length === 0) {
    throw new Error ('Invalid date!');
  }
  if (Object.getOwnPropertyNames (date).length > 0) {
    throw new Error ('Invalid date!');
  }

  let month = date.getMonth ();
  let season = '';

  let seasons = {
    spring: [2, 3, 4],
    summer: [5, 6, 7],
    autumn: [8, 9, 10],
    winter: [11, 0, 1],
  };

  for (const key in seasons) {
    // console.log (`${month} ${key}: ${seasons[key]}`);
    if (seasons[key].includes (month)) {
      season = key;
    }
  }

  return season;
}

module.exports = {
  getSeason,
};

// сначала нужно проверить что объектный toString возвращает [object Date]
// а затем нужно проверить, что в этом объекте нет собственных методов getMonth, я использовал Object.keys(date).length

// В "обычном" моменте с подвохом создается объект без методов, который имитирует Date. А в "особом" моменте с подвохом ему еще добавляются псевдометоды, которые есть у объекта Date(getMonth, getFullYear, getDate, getHours, getMinutes, getSeconds, getMilliseconds, getDay)

// Denis Mythnik(@TheMrCrowley) — 11.09.2021
// попробуй при помощи конструкции try...catch вызвать у аргумента метод, который есть только у объекта Date
// Ilya_S — 11.09.2021
// Либо без обработки ошибки принять аргументы как Object.hasOwnPropertyNames(arguments).length > 0 и выкинуть саму ошибку
