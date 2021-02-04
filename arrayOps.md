// Given the following array `[[1,2,3,4,5], [1,2,3,4,5]]`
// write a function called arrayOps, which will produce the following outcome:
// `[0,2,6,12,20,5,12,21,32,45]`

function arrayOps(arr) {
  //code goes here
}

// arrayOps(...);

  function arrayOps(arr) {
    let res = [];
    for (let i = 0; i < arr.length; i += 1) {
      for (let j = 0; j < arr[i].length; j += 1) {
        res = [...res, arr[i][j] * 5 * i + arr[i][j] * (arr[i][j] - 1)];
      }
    }
    return res;
  }