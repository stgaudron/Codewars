function narcissistic(value) {
    const d = value.toString().split('').map(Number)
    const n = d.reduce((acc, curr) => { return acc + curr**(d.length)},0)
    return ( n == value ? true : false)
  }