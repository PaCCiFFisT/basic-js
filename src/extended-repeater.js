module.exports = function repeater(str, {
  repeatTimes = 1,
  separator = '+',
  addition = '',
  additionRepeatTimes = 1,
  additionSeparator = '|',
}) {
  let mainStr = '', solution = '', addStr = '';
  addStr = addStr.concat(addition).concat(additionSeparator).repeat(additionRepeatTimes - 1).concat(addition)
  mainStr = mainStr.concat(str).concat(addStr).concat(separator).repeat(repeatTimes - 1).concat(str).concat(addStr)
  return mainStr
};
