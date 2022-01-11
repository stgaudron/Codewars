function digPow(n, p){
    const pow = (parseInt(n).toString().split('')).reduce((acc, curr, index) => {
      return (acc + curr**(p+index))
    },0)
    const k = pow / n
    return Number.isInteger(k) ? k : -1
  }