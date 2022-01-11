function add(a, b) {
    aL = a.length
    bL = b.length
    mL = Math.max(aL, bL)
  
    let r=0
    let sum=''
  
    for(let i=1; i<= mL; i++) {
      let A = +a.charAt(aL-i)
      let B = +b.charAt(bL-i)
  
      let t = r + A + B
      r = t/10 |0
      t %= 10
  
      sum = (i === mL && r) ? r*10+t+sum : t+sum
    }
    return sum
  }