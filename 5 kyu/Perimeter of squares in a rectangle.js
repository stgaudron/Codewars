function perimeter(n) {
    let f = 0
    let fPlus = 1
    let sum = 0
    let i = 0
    while(i <= n) {
      fPlus = f + fPlus
      f = fPlus - f
      sum += f
      i++
    }
    return sum*4
  }