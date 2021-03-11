module.exports = function countCats(matrix) {
  var count = 0;
  let arr = matrix.flat();
  arr.forEach((element) => {
    if (element === "^^") {
      count++
    }

  });
  if (count > 0) {
    return count
  } else {
    return 0;
  }
};
