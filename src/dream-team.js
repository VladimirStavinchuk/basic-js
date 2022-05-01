const {NotImplementedError} = require ('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam (members) {
  if (!Array.isArray (members)) {
    return false;
  }

  return members
    .reduce ((dreamTeam, item) => {
      return typeof item === 'string'
        ? dreamTeam + item.match (/[a-zA-Z]/)[0].toUpperCase ()
        : dreamTeam;
    }, '')
    .split ('')
    .sort ()
    .join ('');

  // throw new NotImplementedError('Not implemented');
  // // remove line with error and write your code here
}

module.exports = {
  createDreamTeam,
};

// console.log (createDreamTeam (['sadsa', 1111, 'zzz']));

// console.log (
//   createDreamTeam ([
//     '   William Alston ',
//     ' Paul Benacerraf',
//     '  Ross Cameron',
//     '       Gilles Deleuze',
//     '  Arda Denkel ',
//     '  Michael Devitt',
//     '  Kit Fine',
//     ' Nelson Goodman',
//     'David Kolb',
//     '   Saul Kripke',
//     '  Trenton Merricks',
//     '  Jay Rosenberg',
//   ])
// );
