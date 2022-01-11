var moveZeros = function (arr) {
    let res = []
    let zeros = []
    for (let i = 0; i<arr.length; i++) {
      arr[i] === 0 ? zeros.push(0) : res.push(arr[i])
     }
    return res.concat(zeros)
  }