
module.exports = function createDreamTeam(members) {
  let sortMem = [],
    teamName = '';
  console.log(typeof members)
  if (typeof members != 'object' || members === null || Array.isArray(members) === false) { return false };
  sortMem = members.filter(element => typeof element === 'string').map(element => element.trim());
  console.log(sortMem)
  sortMem.forEach((element, i) => {
    if (typeof element != 'string') { return false };
    teamName = teamName + element.charAt(0);
    console.log(typeof teamName)
  })
  let teamNameArr = teamName.toUpperCase().split('');
  teamNameArr.sort().join('');
  if (teamName.length >= 1) {
    return teamNameArr.sort().join('');
  } else {
    return false;
  }
};
