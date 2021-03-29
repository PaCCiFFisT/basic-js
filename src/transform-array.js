module.exports =

  function transform(arr) {

    if (arr.length === 0) {
      return [];
    }
    const doubleN = '--double-next',
      doubleP = '--double-prev',
      discardN = '--discard-next',
      discardP = '--discard-prev';
    let solution = [],
      flagAdd = false,
      flagRemove = false;
    for (var i = 0; i < arr.length; i++) {
      if (flagRemove === true) {
        flagRemove = false;
        continue;
      } else if (flagAdd === true) {
        flagAdd = false;
        solution.push(arr[i]);
        solution.push(arr[i]);
        continue;
      }
      if (arr[i] != doubleN && arr[i] != doubleP && arr[i] != discardN && arr[i] != discardP) {
        solution.push(arr[i])
      } else if (arr[i] === discardP) {
        if (i >= 1 && arr[i - 2] != discardN) {
          solution.pop()
        }
      } else if (arr[i] === doubleP) {
        if (i >= 1 && arr[i - 2] != discardN) {
          solution.push(arr[i - 1])
        }
      } else if (arr[i] === doubleN) {
        flagAdd = true
      } else if (arr[i] === discardN) {
        flagRemove = true
      }


    };
    return solution;
  }