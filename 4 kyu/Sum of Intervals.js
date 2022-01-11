function sumIntervals(intervals){
    let arr = []
    intervals.forEach(e => {
      for (let i=e[0]; i < e[1]; i++) {
        arr.push(i)
      }
    })
    arr = [... new Set(arr)]
    return arr.length
  }