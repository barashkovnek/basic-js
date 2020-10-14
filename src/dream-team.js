const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  if (!Array.isArray(members)) return false;
  let res = [];
  for (let i = 0; i < members.length; i++) {

    // let res = [];
    // let newArr = [];
    if (typeof members[i] === 'string') {
      res.push(members[i].trim().charAt(0).toUpperCase());

    } 
  }
  return res.sort().join('');

};
