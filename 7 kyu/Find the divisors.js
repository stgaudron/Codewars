function divisors(integer) {
    let divisorsArray = []
    for (let i=2; i<integer; i++) {
      if (integer%i == 0) {
        divisorsArray.push(i)
      }
    }
    if (divisorsArray.length == 0)
      return integer + ' is prime'
    else
      return divisorsArray
  };