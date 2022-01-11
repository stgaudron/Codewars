function add(n){
    let s = n
    let f= (n) => {
      s += n
      return f
    }
    f.valueOf = () => {
      return s
    }
    return f
  }