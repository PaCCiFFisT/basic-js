

module.exports =
  function getSeason(date) {
    //console.log(date.getMonth())
    if (date === undefined) {
      return 'Unable to determine the time of year!';
    }
    if (Object.prototype.toString.call(date) !== "[object Date]") {
      throw new Error
    }
    if (date.getMonth() >= 2 && date.getMonth() <= 4) {
      console.log('spring')
      return 'spring';
    } else if (date.getMonth() >= 5 && date.getMonth() <= 7) {
      console.log('summer')
      return 'summer';
    } else if (date.getMonth() >= 8 && date.getMonth() <= 10) {
      console.log('authumn')
      return 'fall'
    } else {
      console.log('winter')
      return 'winter'
    }
  }
