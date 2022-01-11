function inArray(array1,array2){
    const res = []
    const a1 = array1.filter(String)
    const a2 = array2.filter(String)
    
    for (let e of a2) {
      for (let s of a1) {
        const r = new RegExp(s)
        if (r.test(e) && !res.includes(s)) {
          res.push(s)
          res.sort()
        }
      }
    }
    return res
  }