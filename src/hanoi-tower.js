const {NotImplementedError} = require ('../extensions/index.js');

/**
 * Calculate turns number and time (in seconds) required
 * to solve puzzle
 * 
* turns (минимальное число (тип number) ходов, необходимое для решения головоломки)
* seconds (минимальное число (тип number) секунд, необходимое для решения головоломки при заданной скорости;  должно быть целым числом, полученным в результате округления результата расчетов в меньшую (floor) сторону)
 * 
 * calculateHanoi(9, 4308) => { turns: 511, seconds: 427 }
 *
 */
function calculateHanoi (disksNumber, turnsSpeed) {
  let res = {turns: 0, seconds: 0};

  res.turns = 2 ** disksNumber - 1;
  res.seconds = Math.floor (res.turns * 3600 / turnsSpeed);

  return res;
}

module.exports = {
  calculateHanoi,
};

console.log (calculateHanoi (9, 4308), '   => { turns: 511, seconds: 427 }');

// turnsSpeed это сколько ходов в час делается
// тебе нужно рассчитать за сколько секунд сделается твое кол-во ходов с учетом такой скорости
// переведи просто час в секунды и вычисли за скольок сек делается ход
