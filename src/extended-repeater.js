const {NotImplementedError} = require ('../extensions/index.js');
/**
 * Create a repeating string based on the given parameters
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 **/
function repeater (str, options) {
  // let subStr;
  // let res;

  // str = str.toString ();
  // options.addition == options.addition.toString ();

  // if (options.additionRepeatTimes > 0) {
  //   subStr = repeatStr (
  //     options.addition,
  //     options.additionRepeatTimes,
  //     (options.additionSeparator = '|')
  //   );
  // }

  // if (options.repeatTimes > 0) {
  //   res = repeatStr (
  //     str + subStr,
  //     options.repeatTimes,
  //     (options.separator = '+')
  //   );
  // }

  // function repeatStr (str, repeatTimes, separator) {
  //   let strRepeat = '';
  //   if (!str || repeatTimes < 1) {
  //     return;
  //   } else {
  //     for (let i = 0; i < repeatTimes || 0; i++) {
  //       strRepeat += str + (i === repeatTimes - 1 ? '' : separator);
  //     }
  //   }
  //   return strRepeat;
  // }

  // return res;

  throw new NotImplementedError ('Not implemented');
  // remove line with error and write your code here
}

module.exports = {
  repeater,
};

// console.log (
//   repeater ({
//     repeatTimes: 3,
//     separator: 'iXPTEB30Wc',
//     addition: 'w9aAAJkkdf',
//     additionRepeatTimes: 6,
//     additionSeparator: 'tHxrdWZfiA',
//   })
// );

// str это строка, которая будет повторена
// options это объект опций, который содержит следующие свойства:

// options.repeatTimes устанавливает число повторений str
// options.separator это строка, разделяющая повторения str
// options.addition это дополнительная строка, которая будет добавлена после каждого повторения str
// options.additionRepeatTimes устанавливает число повторений addition
// options.additionSeparator это строка, разделяющая повторения addition

// Параметры str и addition по умолчанию являются строками. В случае, если они другого типа, он должны быть преобразованы к строке.

// Параметры separator и additionSeparator являются строками.

// repeatTimes и additionRepeatTimes являются целыми числами (в случае отсутствия любого из них соответствующая строка не повторяется).

// Единственный обязательный параметр — это str, остальные могут не быть переданы. Значение separator по умолчанию это '+'. Значение additionSeparator по умолчанию это '|'.
