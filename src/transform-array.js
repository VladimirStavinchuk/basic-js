const {NotImplementedError} = require ('../extensions/index.js');
function transform (arr) {
  // if (!(arr instanceof Array)) работает
  // if (!Array.isArray (arr)) {
  //   throw new Error ("'arr' parameter must be an instance of the Array!");
  // }
  // let newArr = [];
  // for (let i = 0; i < arr.length; i++) {
  //   // console.log (!Number.isNaN (arr[i]), arr[i]);
  //   // if (typeof arr[i] === 'number') {
  //   if (Array.isArray (arr[i])) {
  //     transform (arr[i]);
  //   }
  //   if (typeof arr[i] === 'number' && arr[i] > 0 && arr[i] < 10) {
  //     newArr.push (arr[i]);
  //   } else if (arr[i] === '--discard-next') {
  //     i++;
  //   } else if (arr[i] === '--discard-prev') {
  //     newArr.pop ();
  //     i++;
  //   } else if (arr[i] === '--double-next' && arr[i + 1]) {
  //     newArr.push (arr[i + 1]);
  //   } else if (arr[i] === '--double-prev' && arr[i - 1]) {
  //     newArr.push (arr[i - 1]);
  //   }
  // }
  // return newArr;

  throw new NotImplementedError ('Not implemented');
  // remove line with error and write your code here
}
// console.log (
//   transform ([1, 2, '--discard-prev', '--double-prev', 4, 5]),
//   ' => [1, 4, 5]'
// );

// transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
// [1, 2, '--discard-prev', '--double-prev', 4, 5] должно получаться [1, 4, 5]

module.exports = {
  transform,
};
