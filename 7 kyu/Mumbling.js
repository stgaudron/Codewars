function accum(s) {
    return s.split('').map((e,i) => { return e.toUpperCase() + e.toLowerCase().repeat(i)}).join('-')
  }